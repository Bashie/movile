export default (productos = [], action) => {
	switch (action.type) {
		case 'POST-PRODUCTOS':
			return [...productos, action.payload];
		case 'GET-PRODUCTOS':
			return action.payload;
		case 'UPDATE-PRODUCTOS':
			return productos.map(producto => producto._id === action.payload._id ? action.payload : producto);
		case 'DELETE-PRODUCTOS':
			return productos.filter(producto => producto._id !== action.payload);
		default:
			return productos;
	}
}