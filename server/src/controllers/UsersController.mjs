import { client } from "../config/database.mjs";
import bcrypt from "bcrypt";
import crypto from 'crypto';

export const UpdateData = async (req,res) => {

    const {name,familyName,phone,about} = req.body;
    const {id} = req.params;
    if(!name || !familyName || !phone || !about || !id){
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
            tele: result.rows[0].tele_u,
            about: result.rows[0].about_u
        });

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const UpdateConn = async (req,res) => {

    const {email,password} = req.body;
    const {id} = req.params;
    if(!email,!password){
        return res.status(400).json({message:"email or phone number is messing"});
    }

    try{
        
        const result = await client.query(
            'UPDATE utilisateurs SET email_u=$2, mot_de_passe_u=$3 WHERE id_u=$1 RETURNING *',
            [id, email, await bcrypt.hash(password,12)]
        );

        res.status(201).json({
            id: result.rows[0].id_u,
            email: result.rows[0].email_u,
            password: result.rows[0].mot_de_passe_u
        });

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}