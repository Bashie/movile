import mongoose from 'mongoose';
const pedidoSchema = new mongoose.Schema({
	"dni": String,
	"items": String
}, { timestamps: true });
const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;