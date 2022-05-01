import Pedido from '../models/pedido.js';

export const crearPedido = async (req, res) => {
	try {
		const pedido = new Pedido(req.body);
		await pedido.save();
		res.status(201).json(pedido);
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}

export const getPedidos = async (req, res) => {
	try {
		const pedidos = await Pedido.find();
		res.status(200).json(pedidos);
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}

export const updatePedido = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const pedido = await Pedido.findById({ _id: req.params.id });
        keys.forEach(update => pedido[update] = req.body[update]);
        await pedido.save();
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const borrarPedido = async (req, res) => {
	try {
		const pedido = await Pedido.findOneAndDelete({ _id: req.params.id });
		res.status(200).json("Pedido borrado");
	} catch (error) {
		res.status(404).json({ success: false, error });
	}
}