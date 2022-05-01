import Cliente from '../models/cliente.js';

export const crearCliente = async (req, res) => {
	try {
		const cliente = new Cliente(req.body);
		await cliente.save();
		res.status(201).json(cliente);
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}

export const getClientes = async (req, res) => {
	try {
		const clientes = await Cliente.find();
		res.status(200).json(clientes);
	} catch (error) {
		res.status(400).json({ success: false, error });
	}
}

export const updateCliente = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const cliente = await Cliente.findById({ _id: req.params.id });
        keys.forEach(update => cliente[update] = req.body[update]);
        await cliente.save();
        res.status(200).json(cliente);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const borrarCliente = async (req, res) => {
	try {
		const cliente = await Cliente.findOneAndDelete({ _id: req.params.id });
		res.status(200).json("Cliente borrado");
	} catch (error) {
		res.status(404).json({ success: false, error });
	}
}