import { client } from "../config/database.mjs";

export const AddComment = async (req,res) => {

    const {content,techId} = req.body;
    const {tickId} = req.params;
    const formattedDate = new Date().toLocaleDateString('en-GB');

    try{

        const {rows} = await client.query(`INSERT INTO Comentaires(contenu_c,auteur_id_c,intervention_id_c,date_creation)
                                           VALUES($1,$2,$3,$4) RETURNING *`,[content,techId,tickId,formattedDate]);
        res.status(201).json({
            id: rows[0].id_c,
            title: rows[0].contenu_c,
            description: rows[0].auteur_id_c,
            categorie: rows[0].intervention_id_c,
            created_at: rows[0].date_creation
        })                                   

    }catch(err){
        res.status(500).json({ message_in_the_catch_place: err.message });
    }
}