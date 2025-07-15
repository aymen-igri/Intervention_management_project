import { client } from "../config/database.mjs";
import bcrypt from "bcrypt";
import crypto from 'crypto';

function generateToken() {
  return crypto.randomBytes(32).toString('hex'); // 64-char hex
}

export const SignUp = async (req,res)=>{
    const {name,familyName,phone,email,password} = req.body;
    if(!name || !familyName || !phone || !email || !password){
        return res.status(400).json({message:"email or phone number is messing"});
    }

    try{
        
        const result = await client.query(`INSERT INTO utilisateurs(nom_u,prenom_u,tele_u,role_id_u,statut_u,date_creation,email_u,mot_de_passe_u)
                                           VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id_u, nom_u, prenom_u;
                                           `,
                                          [name,familyName,phone,3,"offline",new Date,email,await bcrypt.hash(password,12)]
        )

        const token = generateToken();
        const result2 = await client.query('INSERT INTO tokens(user_id, access_token) VALUES ($1,$2) RETURNING access_token',
                            [result.rows[0].id_u, token]
                          );

        res.status(201).json({
            id:   result.rows[0].id_u,
            name: result.rows[0].nom_u,
            familyName: result.rows[0].prenom_u,
            token: result2.rows[0].access_token
        });
        
    }catch(e){
        if (e.code === '23505') {                // unique-violation
            return res.status(409).json({ message: 'Email already registered' });
        }
        console.error(e);
        res.status(500).json({ message: `Server error: ${e}` });
    }
}

export const SignIn = async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"email or password is messing"});
    }

    try{

        const result = await client.query(`SELECT * FROM utilisateurs 
                                           Where email_u = $1`,
                                          [email]);

        const user = result.rows[0];
        const ok = await bcrypt.compare(password,user.mot_de_passe_u);
        if(!ok){
            return res.status(401).json({massage:"incorrect password"});
        }

        const token = generateToken();
        await client.query('INSERT INTO tokens(user_id, access_token) VALUES ($1,$2) RETURNING access_token',
                            [result.rows[0].id_u, token]
                          );
        
        res.status(201).json({
            id:user.id_u,
            name: user.nom_u,
            familyName: user.prenom_u,
            token: token
        })
    }catch(e){
        console.error(e);
        res.status(500).json({ message: `Server error: ${e}` });
    }
}