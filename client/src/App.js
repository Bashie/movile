import React, { useState, useEffect } from 'react'
import FormCliente from './components/form/FormCliente';
import Clientes from './components/clientes/Clientes';
import { useDispatch } from 'react-redux';
import { getClientes } from './_actions/clientes';
import FormPedido from './components/form/FormPedido';
import Pedidos from './components/pedidos/Pedidos';
import { getPedidos } from './_actions/pedidos';

function App() {
	const dispatch = useDispatch();
	const [id, setId] = useState(0);
	const [pedidoId, setPedidoId] = useState(0);
	useEffect(() => {
		dispatch(getClientes());
		dispatch(getPedidos());
	}, [dispatch])
	
	return (
		<>
			<div>
			<FormCliente setId={setId} getId={id} dispatch={dispatch} />
			<Clientes setId={setId} />
			</div>
			<div>
			<FormPedido setId={setPedidoId} getId={pedidoId} dispatch={dispatch} />
			<Pedidos setPedidoId={setPedidoId} />
			</div>
		</>
	);
}
export default App;