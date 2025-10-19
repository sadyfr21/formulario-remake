
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';


const app = express();
app.use(cors());
const port = 3000;


const db = mysql.createConnection({
    host:'trolley.proxy.rlwy.net',
    port:30038,
    user:'root',
    password:'yPQFLtGjtmmkqTDEieSlVfBATqPlyMCF',
    database:'railway'

})

// conectar a la base de datos
db.connect(err=>{
    if(err) { 
        console.error('Error de conexion a la base de datos:', err);
        return;
    }
 console.info('conexion a la base de datos exitosa');
})

app.use(express.json());