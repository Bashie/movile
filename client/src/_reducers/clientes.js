export default (clientes = [], action) => {
	switch (action.type) {
		case 'POST':
			return [...clientes, action.payload];
		case 'GET':
			return action.payload;
		case 'UPDATE':
			return clientes.map(cliente => cliente._id === action.payload._id ? action.payload : cliente);
		case 'DELETE':
			return clientes.filter(cliente => cliente._id !== action.payload);
		default:
			return clientes;
	}
}