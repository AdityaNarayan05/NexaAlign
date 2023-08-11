import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mysql from 'mysql2'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';


dotenv.config()
const app = express()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users Where email = ? AND  password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });
        if (result.length > 0) {
            const id = result[0].id;
            const token = jwt.sign({ role: "admin" }, "jwt-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Success" })
        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
})
 
db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
})

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});
