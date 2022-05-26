import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { borrarPedido } from '../../../_actions/pedidos'
import PedidoItem from './PedidoItem'
import Moment from 'moment';
import 'moment/locale/es';

Moment.locale('es');

export default function Pedido({ marcarEntregado, pedido }) {
	const dispatch = useDispatch()
	const productos = useSelector(state => state.productos)
	let total = 0;
	const getPrecio = (precio, cantidad) => {
		total += precio * cantidad;
		return precio * cantidad;
	}
	return (
		<>
			<div>
				<p>{Moment(pedido.createdAt).format('MMMM DD')}</p>
				<div className="productos">
					{pedido.productos.map(p => {
						return productos.map(producto => (p.producto === producto._id && p.cantidad > 0) ? <PedidoItem key={producto._id} cantidad={p.cantidad} nombre={producto.nombre} precio={getPrecio(producto.precio, p.cantidad)} /> : null)
					})}
				</div>
				<div>
					<p>Total: $ {total}</p>
				</div>
				<p>Estado: {pedido.estado}</p>
				<div>
					{pedido.estado === 'NUEVO' ? <button onClick={() => { marcarEntregado(pedido) }}>Entregar</button> : null}
					<button onClick={() => { dispatch(borrarPedido(pedido._id)) }}>Borrar</button>
				</div>
			</div>
		</>
	)
}