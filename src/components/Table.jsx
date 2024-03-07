export const Table = props => {
	return (
		<table>
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				{props.listaOriginalProductos.map(producto => (
					<tr key={producto.producto}>
						<td>{producto.producto}</td>
						<td>{producto.precio}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
