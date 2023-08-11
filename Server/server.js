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
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
})

db.connect(function(err){
    if (err) throw err;
    console.log("Connected!"); 
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
