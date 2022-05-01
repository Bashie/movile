import express from 'express';
const app = express();
import cors from 'cors';
app.use(express.json());
app.use(cors());
import postClientes from './routes/clientes.js'
import './db/db.js';
app.use('/clientes', postClientes)
app.listen(8000)