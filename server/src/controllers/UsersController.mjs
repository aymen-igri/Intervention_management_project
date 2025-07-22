import { client } from "../config/database.mjs";
import bcrypt from "bcrypt";

export const GetUsersAssign = async (req,res) => {

    try{

        const {rows} = await client.query(`SELECT
                                            u.id_u,
                                            u.nom_u AS name,
                                            u.prenom_u ,
                                            r.nom_r AS role,
                                            u.statut_u AS status
                                            FROM utilisateurs u
                                            JOIN roles r ON r.id_r = u.role_id_u
                                            WHERE u.role_id_u = 3;`)
        res.status(200).json(
            rows.map(u=> ({
                id: u.id_u,
                name: u.name,
                familyName: u.prenom_u,
                role: u.role,
                status: u.status
            }))
        );
        
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const UpdateData = async (req,res) => {

    const {name,familyName,phone,about} = req.body;
    const {id} = req.params;
    if(!name || !familyName || !phone || !id){
        return res.status(400).json({message:"email or phone number is messing"});
    }

    try{
        
        const result = await client.query(
            'UPDATE utilisateurs SET nom_u=$2, prenom_u=$3 , tele_u=$4 , about_u=$5 WHERE id_u=$1 RETURNING *',
            [id, name, familyName, phone, about]
        );
        

        res.status(201).json({
            id: result.rows[0].id_u,
            name: result.rows[0].nom_u,
            familyName: result.rows[0].prenom_u,
            phone: result.rows[0].tele_u,
            about: result.rows[0].about_u
        });

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const UpdateConn = async (req,res) => {

    const { email, password } = req.body;
    const updates = [];
    const values = [req.params.id];

    if (email) {
    updates.push(`email_u=$${values.length + 1}`);
    values.push(email);
    }
    if (password) {
    updates.push(`mot_de_passe_u=$${values.length + 1}`);
    values.push(await bcrypt.hash(password, 12));
    }

    if (updates.length === 0) {
    return res.status(400).json({ message: 'Nothing to update' });
    }

    const sql = `UPDATE utilisateurs SET ${updates.join(', ')} WHERE id_u=$1 RETURNING *`;

    try{
        
        const { rows } = await client.query(sql, values);

        res.status(201).json({
            id: rows[0].id_u,
            email: rows[0].email_u,
        });

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}