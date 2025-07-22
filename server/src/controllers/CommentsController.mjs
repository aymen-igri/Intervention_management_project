import { client } from "../config/database.mjs";

export const GetComment = async (req,res) => {

    const {tickId} = req.params;

    try{

        const {rows} = await client.query(`SELECT
                                            c.id_c          AS id,
                                            c.contenu_c     AS content,
                                            c.date_creation AS created_at,
                                            u.id_u          AS author_id,
                                            u.nom_u         AS author_name,
                                            u.prenom_u      AS author_family_name,
                                            r.nom_r         AS author_role
                                            FROM comentaires c
                                            JOIN utilisateurs u ON u.id_u = c.auteur_id_c
                                            JOIN roles        r ON r.id_r = u.role_id_u
                                            WHERE c.intervention_id_c = $1
                                            ORDER BY c.date_creation DESC;`,[tickId]);
        res.status(200).json(
            rows.map(c => ({
                id: c.id,
                content: c.content,
                created_at: c.created_at,
                author_name: c.author_name,
                author_family_name: c.author_family_name,
                roleUser: c.author_role
            }))
        );                                   

    }catch(err){
        res.status(500).json({ message_in_the_catch_place: err.message });
    }

}

export const AddComment = async (req,res) => {

    const {content,techId} = req.body;
    const {tickId} = req.params;
    const formattedDate = new Date().toLocaleDateString('en-GB');

    try{

        const {rows} = await client.query(`INSERT INTO Comentaires(contenu_c,auteur_id_c,intervention_id_c,date_creation)
                                           VALUES($1,$2,$3,$4) RETURNING *`,[content,techId,tickId,formattedDate]);
        res.status(201).json({
            id: rows[0].id_c,
            content: rows[0].contenu_c,
            auteur_id: rows[0].auteur_id_c,
            ticket_id: rows[0].intervention_id_c,
            created_at: rows[0].date_creation
        })                                   

    }catch(err){
        res.status(500).json({ message_in_the_catch_place: err.message });
    }

}
