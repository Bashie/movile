import React from 'react'

export default function PedidoItem({ cantidad, nombre, precio }) {
	return (
		<>
			<div className="productoItem">
				<div>
					<p>{cantidad} x {nombre}</p>
				</div>
				<div className="filler"></div>
				<div>
					<p>$ {precio}</p>
				</div>
			</div>
		</>
	)
}