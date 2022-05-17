import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { borrarPedido } from '../../../_actions/pedidos'
import Moment from 'moment';
import 'moment/locale/es';

Moment.locale('es');

export default function Pedido({ marcarEntregado, pedido }) {
	const dispatch = useDispatch()
	const productos = useSelector(state => state.productos)
	return (
		<>
			<div>
				<p>{Moment(pedido.createdAt).format('MMMM d')}</p>
				<p>{pedido.productos.map(id => {
					return productos.reduce((resultado, producto) => resultado += (id === producto._id) ? producto.nombre + ", " : "" , "")
				})}</p>
				<p>Estado: {pedido.estado}</p>
				<div>
					{pedido.estado === 'NUEVO' ? <button onClick={() => { marcarEntregado(pedido) }}>Entregar</button> : null}
					<button onClick={() => { dispatch(borrarPedido(pedido._id)) }}>Borrar</button>
				</div>
			</div>
		</>
	)
}