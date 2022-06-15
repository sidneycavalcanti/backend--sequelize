import express from 'express';
import routes from './routes.js';
import db from './src/db.js';
import cors from "cors";


const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

db.sync( () => 
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)
);

app.listen(5050, () => 
    console.log('Servidor iniciado na porta 5050')
);

