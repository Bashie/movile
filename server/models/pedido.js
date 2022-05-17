import mongoose from 'mongoose';
const pedidoSchema = new mongoose.Schema({
	"cliente": [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'cliente' }
	],
	"productos": [{type: mongoose.Schema.Types.ObjectId, ref:'producto'}],
	"estado": String
}, { timestamps: true });
const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;