import { client } from "../config/database.mjs";

export const GetTickets = async (req,res) => {

    try{

        const {rows} = await client.query(`SELECT * FROM tickets`);
        res.status(201).json({
            id: rows[0].id_i,
            title: rows[0].titre_i,
            description: rows[0].description_i,
            categorie: rows[0].categorie_i,
            status: rows[0].etat_i,
            user_id: rows[0].demandeur_id_i,
            created_at: rows[0].date_creation_i,
            closed_at: rows[0].date_cloture_i
        })

    }catch(err){
        res.status(500).json({ message: err.message });
    }

}

export const GetTicketById = async (req,res) => {

    const id = parseInt(req.params.id,10);

    try{

        const {rows} = await client.query(`SELECT * FROM tickets WHERE id_i=$1`,
                                          [id]);
        res.status(201).json({
            id: rows[0].id_i,
            title: rows[0].titre_i,
            description: rows[0].description_i,
            categorie: rows[0].categorie_i,
            status: rows[0].etat_i,
            user_id: rows[0].demandeur_id_i,
            created_at: rows[0].date_creation_i,
            closed_at: rows[0].date_cloture_i
        })

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Ticket not found' });
        }


    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const GetTicketsByUserId = async (req,res) => {

    const userId = parseInt(req.params.userId,10);

    try{

        const {rows} = await client.query(`SELECT * FROM tickets WHERE demandeur_id_i=$1`,
                                          [userId]);
        res.status(200).json(
            rows.map(t => ({
                id: t.id_i,
                title: t.titre_i,
                description: t.description_i,
                categorie: t.categorie_i,
                status: t.etat_i,
                user_id: t.demandeur_id_i,
                created_at: t.date_creation_i,
                closed_at: t.date_cloture_i
            }))
        );

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const GetTicketsByTechId = async (req,res) => {

    const techId = parseInt(req.params.techId,10);

    try{
        const {rows} = await client.query(`SELECT
                                            t.id_i               AS id,
                                            t.titre_i            AS title,
                                            t.description_i      AS description,
                                            t.categorie_i        AS categorie,
                                            t.priorite_i         AS priority,
                                            t.etat_i             AS status,
                                            u.id_u               AS demandeur_id,
                                            u.nom_u              AS demandeur_name,
                                            u.prenom_u           AS demandeur_family_name,
                                            u.email_u            AS demandeur_email,
                                            u.tele_u             AS demandeur_phone,
                                            t.date_creation_i    AS created_at,
                                            t.date_cloture_i     AS closed_at
                                            FROM tickets t
                                            JOIN utilisateurs u ON u.id_u = t.demandeur_id_i
                                            WHERE t.technicien_id_i = $1          -- <- the technician id
                                            ORDER BY t.date_creation_i DESC;`,[techId])
        res.status(200).json(
            rows.map(t => ({
                id: t.id,
                title: t.title,
                description: t.description,
                categorie: t.categorie,
                priority: t.priority,
                status: t.status,
                user_id: t.demandeur_id,
                user_name: t.demandeur_name,
                user_familyName: t.demandeur_family_name,
                user_email: t.demandeur_email,
                user_phone: t.demandeur_phone,
                created_at: t.created_at,
                closed_at: t.closed_at
            }))
        );

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const GetNumberTicketsByStatusUser = async (req,res) => {

    const userId = parseInt(req.params.userId,10);

    try{

        const {rows} = await client.query(`SELECT
                                           COUNT(*)                                AS all_tickets,
                                           SUM(CASE WHEN etat_i = 'open'       THEN 1 ELSE 0 END) AS open,
                                           SUM(CASE WHEN etat_i= 'in progress' THEN 1 ELSE 0 END) AS in_progress,
                                           SUM(CASE WHEN etat_i = 'rejected'   THEN 1 ELSE 0 END) AS rejected,
                                           SUM(CASE WHEN etat_i = 'closed'     THEN 1 ELSE 0 END) AS closed
                                           FROM tickets
                                           WHERE demandeur_id_i = $1;`,
                                           [userId]);
        res.status(201).json({
            allTickets: rows[0].all_tickets,
            open: rows[0].open,
            inProgress: rows[0].in_progress,
            rejected: rows[0].rejected,
            closed: rows[0].closed
        })

    }catch(err){ 
        res.status(500).json({ message: err.message });
    }

}

export const GetStatisticsForUser = async (req,res) => {

    const userId = parseInt(req.params.userId,10);

    try{

        const {rows} = await client.query(`SELECT
                                            to_char(date_trunc('month', d.mon), 'Month') AS name,
                                            COALESCE(SUM(CASE WHEN date_trunc('month', date_creation_i) = d.mon THEN 1 END), 0) AS pv,
                                            COALESCE(SUM(CASE WHEN date_trunc('month', date_cloture_i)   = d.mon THEN 1 END), 0) AS uv
                                            FROM generate_series(
                                                    date_trunc('year', CURRENT_DATE),
                                                    date_trunc('year', CURRENT_DATE) + INTERVAL '11 months',
                                                    INTERVAL '1 month'
                                                ) AS d(mon)
                                            LEFT JOIN tickets t
                                                ON (date_trunc('month', t.date_creation_i) = d.mon
                                                    OR date_trunc('month', t.date_cloture_i) = d.mon)
                                                AND t.demandeur_id_i = $1          -- <-- specific user
                                            GROUP BY d.mon
                                            ORDER BY d.mon;`,
                                           [userId]);
        res.status(200).json(
            rows.map(t => ({
                mount: t.name,
                opened: t.pv,
                closed: t.uv
            }))
        );

    }catch(err){  
        res.status(500).json({ message: err.message });
    }

}

export const GetNumberTicketsByStatusTech = async (req,res) => {

    const userId = parseInt(req.params.userId,10);

    try{

        const {rows} = await client.query(`SELECT
                                           COUNT(*)                                AS all_tickets,
                                           SUM(CASE WHEN etat_i = 'open'       THEN 1 ELSE 0 END) AS open,
                                           SUM(CASE WHEN etat_i= 'in progress' THEN 1 ELSE 0 END) AS in_progress,
                                           SUM(CASE WHEN etat_i = 'rejected'   THEN 1 ELSE 0 END) AS rejected,
                                           SUM(CASE WHEN etat_i = 'closed'     THEN 1 ELSE 0 END) AS closed
                                           FROM tickets
                                           WHERE technicien_id_i = $1;`,
                                           [userId]);
        res.status(201).json({
            allTickets: rows[0].all_tickets,
            open: rows[0].open,
            inProgress: rows[0].in_progress,
            rejected: rows[0].rejected,
            closed: rows[0].closed
        })

    }catch(err){ 
        res.status(500).json({ message: err.message });
    }

}

export const GetStatisticsForTech = async (req,res) => {

    const userId = parseInt(req.params.userId,10);

    try{

        const {rows} = await client.query(`SELECT
                                            to_char(date_trunc('month', d.mon), 'Month') AS name,
                                            COALESCE(SUM(CASE WHEN date_trunc('month', date_creation_i) = d.mon THEN 1 END), 0) AS pv,
                                            COALESCE(SUM(CASE WHEN date_trunc('month', date_cloture_i)   = d.mon THEN 1 END), 0) AS uv
                                            FROM generate_series(
                                                    date_trunc('year', CURRENT_DATE),
                                                    date_trunc('year', CURRENT_DATE) + INTERVAL '11 months',
                                                    INTERVAL '1 month'
                                                ) AS d(mon)
                                            LEFT JOIN tickets t
                                                ON (date_trunc('month', t.date_creation_i) = d.mon
                                                    OR date_trunc('month', t.date_cloture_i) = d.mon)
                                                AND t.technicien_id_i = $1          -- <-- specific user
                                            GROUP BY d.mon
                                            ORDER BY d.mon;`,
                                           [userId]);
        res.status(200).json(
            rows.map(t => ({
                mount: t.name,
                opened: t.pv,
                closed: t.uv
            }))
        );

    }catch(err){  
        res.status(500).json({ message: err.message });
    }

}

export const AddTicket = async (req,res) => {

    const {title,description,categorie} = req.body;
    const {idUser} = req.params;
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    if(!title || !description || !categorie || !idUser){
        return res.status(400).json({message:"somting is messing"});
    }

    try{

        const {rows} = await client.query(`INSERT INTO tickets(titre_i,description_i,categorie_i,etat_i,demandeur_id_i,date_creation_i)
                                           VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
                                           [title,description,categorie,"open",idUser,formattedDate]);

        res.status(201).json({
            id: rows[0].id_i,
            title: rows[0].title_i,
            description: rows[0].description_i,
            categorie: rows[0].categorie_i,
            status: rows[0].etat_i,
            user_id: rows[0].demandeur_id_i,
            created_at: rows[0].date_creation_i
        })
    }catch(err){
        res.status(500).json({ message: err.message });
    }

}

export const UpdateTiket = async (req,res) => {

    const {title,description,categorie} = req.body;
    const {id} = req.params;

    if(!title || !description || !categorie || !id){
        return res.status(400).json({message:"somting is messing"});
    }

    try{

        const {rows} = await client.query(`UPDATE tickets SET titre_i=$2, description_i=$3, categorie_i=$4 WHERE id_i=$1
                                           RETURNING *`,
                                           [id,title,description,categorie]);
        res.status(201).json({
            id: rows[0].id_i,
            title: rows[0].title_i,
            description: rows[0].description_i,
            categorie: rows[0].categorie_i,
        })

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const updateTicketStatus = async (req,res) => {

    const {status} = req.body;
    const {id} = req.params;

    try{

        const {rows} = await client.query(`UPDATE tickets SET etat_i=$2 WHERE id_i=$1
                                          RETURNING *`,
                                          [id,status]);

        res.status(201).json({
            id: rows[0].id_i,
            title: rows[0].title_i,
            description: rows[0].description_i,
            categorie: rows[0].categorie_i,
            status: rows[0].etat_i
        })

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

