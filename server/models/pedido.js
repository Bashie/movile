import mongoose from 'mongoose';


const pedidoSchema = new mongoose.Schema({
	"cliente": 
		{ type: mongoose.Schema.Types.ObjectId, ref: 'cliente' }
	,
	"productos": [{
		"producto": 
			{ type: mongoose.Schema.Types.ObjectId, ref: 'producto' }
		,
		"cantidad": {
			type: Number,
			trim: true,
			min: 0
		}
	}],
	"estado": String
}, { timestamps: true });
const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;