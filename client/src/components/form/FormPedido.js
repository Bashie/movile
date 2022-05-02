import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { crearPedido, updatePedido, borrarPedido } from '../../_actions/pedidos';
import { useSelector } from 'react-redux';

export default function FormPedido({ getId, setId, dispatch }) {
	const { register, handleSubmit, reset, setValue } = useForm();
	const pedido = useSelector(state => state.pedidos.find((pedido) => pedido._id === getId ? pedido : null));
	useEffect(() => {
		if (getId !== 0) {
			let keys = Object.keys(pedido);
			keys.forEach((key) => setValue(key, pedido[key]))
		}
	}, [getId, pedido, setValue])
	const onSubmit = (data) => {
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
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input type="text" name="dni" placeholder="DNI" {...register('dni')} />
				</div>
				<div>
					<input type="text" name="items" placeholder="Items" {...register('items')} />
				</div>
				<br />
				<button type="submit">Guardar</button>
				<button onClick={() => { borrar(getId) }}>Borrar</button>
			</form>
		</>
	)
}