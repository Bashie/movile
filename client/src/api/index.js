import axios from 'axios';
//const url = 'https://optimum-door-349012.uc.r.appspot.com/clientes';
//const urlPedido = 'https://optimum-door-349012.uc.r.appspot.com/pedidos';
//const urlProducto = 'https://optimum-door-349012.uc.r.appspot.com/productos';
const url = 'http://localhost:8000/clientes';
const urlPedido = 'http://localhost:8000/pedidos';
const urlProducto = 'http://localhost:8000/productos';
export const crearCliente = (cliente) => axios.post(url, cliente);
export const getClientes = () => axios.get(url);
export const updateCliente = (id, cliente) => axios.patch(`${url}/${id}`, cliente);
export const borrarCliente = (id) => axios.delete(`${url}/${id}`);

export const crearPedido = (pedido) => axios.post(urlPedido, pedido);
export const getPedidos = () => axios.get(urlPedido);
export const updatePedido = (id, pedido) => axios.patch(`${urlPedido}/${id}`, pedido);
export const borrarPedido = (id) => axios.delete(`${urlPedido}/${id}`);

export const crearProducto = (producto) => axios.post(urlProducto, producto);
export const getProductos = () => axios.get(urlProducto);
export const updateProducto = (id, producto) => axios.patch(`${urlProducto}/${id}`, producto);
export const borrarProducto = (id) => axios.delete(`${urlProducto}/${id}`);
