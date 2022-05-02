import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { crearPedido, updatePedido, borrarPedido } from '../../_actions/pedidos';
import { useSelector } from 'react-redux';

export default function FormPedido({ getId, setId, dispatch }) {
	const { register, handleSubmit, reset, setValue } = useForm();
	const pedido = useSelector(state => state.pedidos.find((pedido) => pedido._id === getId ? pedido : null));
	const [dnivalue, setDnivalue] = useState(0);
	useEffect(() => {
		if (getId !== 0) {
			let keys = Object.keys(pedido);
			keys.forEach((key) => setValue(key, pedido[key]))
		}
	}, [getId, pedido, setValue])
	const onSubmit = (data) => {
		console.log(data)
		if (getId === 0) {
			if (data.dni) {
				dispatch(crearPedido(data))
				reset()
			}
		} else {
			dispatch(updatePedido(getId, data))
			reset()
			setId(0)
		}
	}
	const borrar = (id) => {
		dispatch(borrarPedido(id));
		reset()
		setId(0)
	}
	const clientes = useSelector(state => state.clientes)
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} >

				<div>
					<select {...register('dni')} className="smallLogindrop">
						<option value="" />
						{clientes.map(cliente => {
							return <option key={cliente._id} value={cliente.nickname} >{cliente.nickname}</option>;
						})}
					</select>
				</div>
				<div>
					<input type="text" name="items" placeholder="Items" {...register('items')} />
				</div>
				<button type="submit">Guardar</button>
				<button onClick={() => { borrar(getId) }}>Borrar</button>
			</form>
		</>
	)
}