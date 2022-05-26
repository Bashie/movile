import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'react-dropdown/style.css';
import Pedido from './pedido/Pedido';
import { updatePedido } from '../../_actions/pedidos'
dayjs.extend(relativeTime);

export default function Pedidos({ setPedidoId }) {
	const pedidos = useSelector(state => state.pedidos)
	const dispatch = useDispatch()
	const [clienteId, setClienteId] = useState(0);
	const clienteSeleccionado = event => {
		if (event.target.value) {
			setClienteId(event.target.value);
		}
	};
	const marcarEntregado = (pedido) => {
		pedido.estado = "ENTREGADO";
		dispatch(updatePedido(pedido._id, pedido));
	}
	const clientes = useSelector(state => state.clientes)
	return (
		<>
			<div>
				<p>Ver pedidos:</p>

				<select className="smallLogindrop" onChange={clienteSeleccionado}>
					<option value="" />
					{clientes.map(cliente => {
						return <option key={cliente._id} value={cliente._id} >{cliente.nickname}</option>;
					})}
				</select>
			</div>
			<div>
				{clienteId ? pedidos.map(pedido => {
					return (pedido.cliente === clienteId) ? <Pedido marcarEntregado={marcarEntregado} pedido={pedido} key={pedido._id} /> : null;
				}) : null}
			</div>
		</>
	)
}