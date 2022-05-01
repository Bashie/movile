import React, { useState, useEffect } from 'react'
import FormCliente from './components/form/FormCliente';
import Clientes from './components/clientes/Clientes';
import { useDispatch } from 'react-redux';
import { getClientes } from './_actions/clientes';

function App() {
	const dispatch = useDispatch();
	const [id, setId] = useState(0);
	useEffect(() => {
		dispatch(getClientes());
	}, [dispatch])
	return (
		<>
			<FormCliente setId={setId} getId={id} />
			<Clientes setId={setId} />
		</>
	);
}
export default App;