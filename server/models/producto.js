import mongoose from 'mongoose';
const productoSchema = new mongoose.Schema({
	"nombre": String,
	"stock": Number
}, { timestamps: true });
const Producto = mongoose.model('producto', productoSchema);
export default Producto;