import React from 'react'
import { useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'react-dropdown/style.css';
dayjs.extend(relativeTime);

export default function Pedidos({ setPedidoId }) {
	const pedidos = useSelector(state => state.pedidos)
	const pedidoSeleccionado = event => {
		if (event.target.value) {
			setPedidoId(event.target.value);
		}
	};
	const clientes = useSelector(state => state.clientes)
	return (
		<>
			<select onChange={pedidoSeleccionado}>
				<option value="" />
				{pedidos.map(pedido => {
					return <option key={pedido._id} value={pedido._id}>{clientes.find((cliente) =>  {return cliente === pedido.cliente ? cliente.nickname : null})}, {pedido.items}</option>;
				})}
			</select>
		</>
	)
}