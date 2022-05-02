import * as api from '../api/index';

export const crearCliente = (cliente) => async (dispatch) => {
	const { data } = await api.crearCliente(cliente);
	dispatch({ type: 'POST', payload: data });
}

export const getClientes = () => async (dispatch) => {
	const { data } = await api.getClientes();
	dispatch({ type: 'GET', payload: data })
}

export const updateCliente = (id, cliente) => async (dispatch) => {
	const { data } = await api.updateCliente(id, cliente);
	dispatch({ type: 'UPDATE', payload: data })
}

export const borrarCliente = (id) => async (dispatch) => {
	const { data } = await api.borrarCliente(id);
	dispatch({ type: 'DELETE', payload: id });
}