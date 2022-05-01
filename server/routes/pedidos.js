import express from 'express';
const router = express.Router();
import { getPedidos, crearPedido, updatePedido, borrarPedido } from '../controllers/pedidos.js';
router.get('/', getPedidos);
router.post('/', crearPedido);
router.patch('/:id', updatePedido);
router.delete('/:id', borrarPedido);
export default router;