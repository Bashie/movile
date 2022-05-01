import axios from 'axios';
const url = 'http://localhost:8000/clientes';
export const crearCliente = (cliente) => axios.post(url, cliente);
export const getClientes = () => axios.get(url);
export const updateCliente = (id, cliente) => axios.patch(`${url}/${id}`, cliente);
export const borrarCliente = (id) => axios.delete(`${url}/${id}`);
