import { combineReducers } from 'redux';
import clientes from './clientes';
import pedidos from './pedidos';
export default combineReducers({
	clientes,
	pedidos
})