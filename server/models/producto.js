import mongoose from 'mongoose';
const productoSchema = new mongoose.Schema({
	"nombre": String,
	"stock": {
		type: Number,
		trim: true,
		min: 0
	},
	"precio": Number
}, { timestamps: true });
const Producto = mongoose.model('producto', productoSchema);
export default Producto;