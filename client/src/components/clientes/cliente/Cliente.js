import React from 'react'
import {useDispatch} from 'react-redux'
import {borrarCliente} from '../../../_actions/clientes'
export default function Cliente({ setId, nombre, apellido, dni, createAt, clienteId }) {
	const dispatch = useDispatch()
	return (
		<>
			<div>
				<p>Cliente: {nombre} {apellido}</p>
				<h1>{dni}</h1>
				<span>{createAt}</span>
				<div>
				<button onClick={() => {setId(clienteId)}}>Update</button>
				<button onClick={() => {dispatch(borrarCliente(clienteId))}}>Borrar</button>
				</div>
			</div>
		</>
	)
}