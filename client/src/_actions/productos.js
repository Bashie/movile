import * as api from '../api/index';

export const crearProducto = (producto) => async (dispatch) => {
	const { data } = await api.crearProducto(producto);
	dispatch({ type: 'POST-PRODUCTOS', payload: data });
}

export const getProductos = () => async (dispatch) => {
	const { data } = await api.getProductos();
	dispatch({ type: 'GET-PRODUCTOS', payload: data })
}

export const updateProducto = (id, producto) => async (dispatch) => {
	const { data } = await api.updateProducto(id, producto);
	dispatch({ type: 'UPDATE-PRODUCTOS', payload: data })
}

export const borrarProducto = (id) => async (dispatch) => {
	const { data } = await api.borrarProducto(id);
	dispatch({ type: 'DELETE-PRODUCTOS', payload: id });
}