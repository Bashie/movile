import express from 'express';
const router = express.Router();
import { getProductos, crearProducto, updateProducto, borrarProducto } from '../controllers/productos.js';
router.get('/', getProductos);
router.post('/', crearProducto);
router.patch('/:id', updateProducto);
router.delete('/:id', borrarProducto);
export default router;