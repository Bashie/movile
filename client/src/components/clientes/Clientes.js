import React from 'react'
import { useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'react-dropdown/style.css';
dayjs.extend(relativeTime);

export default function Clientes({ setId }) {
	const clientes = useSelector(state => state.clientes)
	const clienteSeleccionado = event => {
		if (event.target.value) {
			setId(event.target.value);
		}
	};
	return (
		<>
			<select onChange={clienteSeleccionado}>
				<option value="" />
				{clientes.map(cliente => {
					return <option key={cliente._id} value={cliente._id}>{cliente.apellido}, {cliente.nombre}</option>;
				})}
			</select>
		</>
	)
}