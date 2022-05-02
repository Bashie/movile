import mongoose from 'mongoose';
const clienteSchema = new mongoose.Schema({
	"nombre": String,
	"apellido": String,
	"nickname": {
		type: String,
		unique: true 
	},
	"dni": String,
}, { timestamps: true });
const Cliente = mongoose.model('cliente', clienteSchema);
export default Cliente;