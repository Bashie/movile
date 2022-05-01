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
	return (
		<>
			<select onChange={pedidoSeleccionado}>
				<option value="" />
				{pedidos.map(pedido => {
					return <option key={pedido._id} value={pedido._id}>{pedido.dni}, {pedido.items}</option>;
				})}
			</select>
		</>
	)
}