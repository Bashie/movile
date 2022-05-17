import { combineReducers } from 'redux';
import clientes from './clientes';
import pedidos from './pedidos';
import productos from './productos';
export default combineReducers({
	clientes,
	pedidos,
	productos
})