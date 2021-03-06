import bcrypt from 'bcrypt';
import { connection } from '../config/database.js';

export async function createUser(req, res) {

    const user = req.body;

    try {

        const existingUser = await connection.query(`

            SELECT * FROM users WHERE email=$1
        
        `, [user.email]);

        if (existingUser.rowCount > 0) {

            return res.sendStatus(422);

        }

        const passwordHash = bcrypt.hashSync(user.password, 10);

        await connection.query(`
        
            INSERT INTO users(name, email, password)
            VALUES ($1, $2, $3)

        `, [user.name, user.email, passwordHash]);

        res.sendStatus(201);

    } catch (e) {

        res.send(e).status(500);

    }

}

export async function getUser(req, res) {

    const { user } = res.locals;

    try {

        res.send(user);

    } catch (e) {

        res.send(e).status(500);

    }

}




