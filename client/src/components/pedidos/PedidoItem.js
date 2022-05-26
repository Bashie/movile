import React from 'react'

export default function PedidoItem({ producto, actualizarPedido}) {
	return (
		<>
			<div className="productoItem">
				<div>
					{producto.nombre} (Stock: {producto.stock})
				</div>
				<div className="filler"></div>
				<div className="midropdown">
					$ {producto.precio} 
				</div>
				<div>
					<select onChange={actualizarPedido}>
						<option value="" />
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
			</div>
		</>
	)
}