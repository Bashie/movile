import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { crearCliente, updateCliente } from '../../_actions/clientes';
import { useSelector, useDispatch } from 'react-redux';

export default function FormCliente({ getId, setId }) {
	const { register, handleSubmit, reset, setValue } = useForm();
	const cliente = useSelector(state => state.clientes.find((cliente) => cliente._id === getId ? cliente : null));
	const dispatch = useDispatch()
	useEffect(() => {
		if (getId !== 0) {
			let keys = Object.keys(cliente);
			keys.forEach((key) => setValue(key, cliente[key]))
		}
	}, [getId, cliente, setValue])
	const onSubmit = (data) => {
		if (getId === 0) {
			dispatch(crearCliente(data))
			reset()
		} else {
			dispatch(updateCliente(getId, data))
			reset()
			setId(0)
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input type="text" name="nombre" placeholder="Nombre" {...register('nombre')}  />
				</div>
				<div>
					<input type="text" name="apellido" placeholder="Apellido" {...register('apellido')} />
				</div>
				<div>
					<input type="text" name="dni" placeholder="DNI" {...register('dni')} />
				</div>
				<button type="submit">Guardar</button>
			</form>
		</>
	)
}