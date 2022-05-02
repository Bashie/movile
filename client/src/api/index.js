import axios from 'axios';
const url = 'https://optimum-door-349012.uc.r.appspot.com/clientes';
const urlPedido = 'https://optimum-door-349012.uc.r.appspot.com/pedidos';
export const crearCliente = (cliente) => axios.post(url, cliente);
export const getClientes = () => axios.get(url);
export const updateCliente = (id, cliente) => axios.patch(`${url}/${id}`, cliente);
export const borrarCliente = (id) => axios.delete(`${url}/${id}`);

export const crearPedido = (pedido) => axios.post(urlPedido, pedido);
export const getPedidos = () => axios.get(urlPedido);
export const updatePedido = (id, pedido) => axios.patch(`${urlPedido}/${id}`, pedido);
export const borrarPedido = (id) => axios.delete(`${urlPedido}/${id}`);
