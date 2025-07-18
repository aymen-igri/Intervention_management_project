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