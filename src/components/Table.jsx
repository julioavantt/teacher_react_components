export const Table = props => {
	console.log(props)
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				{props.listaOriginalProductos.map(producto => (
					<tr key={producto.id}>
						<td>{producto.id}</td>
						<td>{producto.producto}</td>
						<td>{producto.precio}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
