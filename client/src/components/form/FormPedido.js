import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { crearPedido, updatePedido, borrarPedido } from '../../_actions/pedidos';
import { updateProducto } from '../../_actions/productos';
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
	let stock = true;
	const onSubmit = (data) => {
		stock = true;
		data.productos.forEach(id => { productos.find(producto => { if (id === producto._id) { if (producto.stock -1 < 0) { cancelar(producto); } } }) })
		if (stock) {
			if (getId === 0) {
				if (data.cliente) {
					dispatch(crearPedido(data))
					const ps = [];
					data.productos.forEach(id => { productos.find(producto => { if (id === producto._id) { producto.stock--; dispatch(updateProducto(producto._id, producto)) } }) })
					reset()
				}
			} else {
				dispatch(updatePedido(getId, data))
				reset()
				setId(0)
			}
		}
	}
	const cancelar = (producto) => {
		stock = false;
		alert("No hay suficiente " + producto.nombre);
	}
	const borrar = (id) => {
		dispatch(borrarPedido(id));
		reset()
		setId(0)
	}
	const clientes = useSelector(state => state.clientes)
	const productos = useSelector(state => state.productos)
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} >

				<div>
					<select {...register('cliente')} className="smallLogindrop">
						<option value="" />
						{clientes.map(cliente => {
							return <option key={cliente._id} value={cliente._id} >{cliente.nickname}</option>;
						})}
					</select>
				</div>
				<br/>
				<div>
					<select multiple={true} className="smallLogindrop" {...register('productos')}>
						{productos.map(producto => {
							return <option key={producto._id} value={producto._id} >{producto.nombre} (Stock: {producto.stock})</option>;
						})}
					</select>
					<input type="hidden" name="estado" value="NUEVO" {...register('estado')} />
				</div>
				<br/>
				<button type="submit">Guardar</button>
			</form>
		</>
	)
}