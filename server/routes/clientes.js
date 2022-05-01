import express from 'express';
const router = express.Router();
import { getClientes, crearCliente, updateCliente, borrarCliente } from '../controllers/clientes.js';
router.get('/', getClientes);
router.post('/', crearCliente);
router.patch('/:id', updateCliente);
router.delete('/:id', borrarCliente);
export default router;