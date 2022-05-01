export default (pedidos = [], action) => {
	switch (action.type) {
		case 'POST-PEDIDOS':
			return [...pedidos, action.payload];
		case 'GET-PEDIDOS':
			return action.payload;
		case 'UPDATE-PEDIDOS':
			return pedidos.map(pedido => pedido._id === action.payload._id ? action.payload : pedido);
		case 'DELETE-PEDIDOS':
			return pedidos.filter(pedido => pedido._id !== action.payload);
		default:
			return pedidos;
	}
}