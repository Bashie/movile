import Producto from '../models/producto.js';

export const crearProducto = async (req, res) => {
	try {
		const producto = new Producto(req.body);
		await producto.save();
		res.status(201).json(producto);
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}

export const getProductos = async (req, res) => {
	try {
		const productos = await Producto.find();
		res.status(200).json(productos);
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}

export const updateProducto = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const producto = await Producto.findById({ _id: req.params.id });
        keys.forEach(update => producto[update] = req.body[update]);
        await producto.save();
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const borrarProducto = async (req, res) => {
	try {
		const producto = await Producto.findOneAndDelete({ _id: req.params.id });
		res.status(200).json("Producto borrado");
	} catch (error) {
		res.status(404).json({ success: false, error });
	}
}