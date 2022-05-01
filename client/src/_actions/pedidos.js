import * as api from '../api/index';

export const crearPedido = (pedido) => async (dispatch) => {
	const { data } = await api.crearPedido(pedido);
	dispatch({ type: 'POST-PEDIDOS', payload: data });
}

export const getPedidos = () => async (dispatch) => {
	const { data } = await api.getPedidos();
	dispatch({ type: 'GET-PEDIDOS', payload: data })
}

export const updatePedido = (id, pedido) => async (dispatch) => {
	const { data } = await api.updatePedido(id, pedido);
	dispatch({ type: 'UPDATE-PEDIDOS', payload: id })
}

export const borrarPedido = (id) => async (dispatch) => {
	const { data } = await api.borrarPedido(id);
	dispatch({ type: 'DELETE-PEDIDOS', payload: data });
}