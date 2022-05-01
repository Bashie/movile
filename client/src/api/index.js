import axios from 'axios';
const url = 'http://localhost:8000/clientes';
const urlPedido = 'http://localhost:8000/pedidos';
export const crearCliente = (cliente) => axios.post(url, cliente);
export const getClientes = () => axios.get(url);
export const updateCliente = (id, cliente) => axios.patch(`${url}/${id}`, cliente);
export const borrarCliente = (id) => axios.delete(`${url}/${id}`);

export const crearPedido = (pedido) => axios.post(urlPedido, pedido);
export const getPedidos = () => axios.get(urlPedido);
export const updatePedido = (id, pedido) => axios.patch(`${urlPedido}/${id}`, pedido);
export const borrarPedido = (id) => axios.delete(`${urlPedido}/${id}`);
