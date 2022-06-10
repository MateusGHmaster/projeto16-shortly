import { v4 } from 'uuid';
import bcrypt from 'bcrypt';
import { connection } from '../config/database.js';

export async function userLogin (req, res) {

    const { email, password } = req.body;

    const { rows: users } = await connection.query(`
    
        SELECT * FROM users WHERE email=$1

    `, [email]);

    const [user] = users;

    if (!user) {

        return res.sendStatus(404);

    }

    if (bcrypt.compareSync(password, user.password)) {

        const token = v4();

        await connection.query(`
        
            INSERT INTO sessions(token, "userId") VALUES ($1, $2)
        
        `, [token, user.id]);

        return res.send(token);

    }

    res.sendStatus(500);

}