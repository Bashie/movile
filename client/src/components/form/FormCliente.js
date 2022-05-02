import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { crearCliente, updateCliente, borrarCliente } from '../../_actions/clientes';
import { useSelector } from 'react-redux';

export default function FormCliente({ getId, setId, dispatch }) {
	const { register, handleSubmit, reset, setValue } = useForm();
	const cliente = useSelector(state => state.clientes.find((cliente) => cliente._id === getId ? cliente : null));
	useEffect(() => {
		if (getId !== 0) {
			let keys = Object.keys(cliente);
			keys.forEach((key) => setValue(key, cliente[key]))
		}
	}, [getId, cliente, setValue])
	const onSubmit = (data) => {
		if (getId === 0) {
			if (data.nombre) {
				dispatch(crearCliente(data))
				reset()
			}
		} else {
			dispatch(updateCliente(getId, data))
			reset()
			setId(0)
		}
	}
	const borrar = (id) => {
		dispatch(borrarCliente(id));
		setId(0)
		reset()
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input type="text" name="nombre" placeholder="Nombre" {...register('nombre')} />
				</div>
				<div>
					<input type="text" name="apellido" placeholder="Apellido" {...register('apellido')} />
				</div>
				<div>
					<input type="text" name="dni" placeholder="DNI" {...register('dni')} />
				</div>
				<button type="submit">Guardar</button>
				<button onClick={() => { borrar(getId) }}>Borrar</button>
			</form>
		</>
	)
}