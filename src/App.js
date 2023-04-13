import "./App.css"

export const listaOriginalProductos = [
	{ id: 1, producto: "Azucar", precio: 1 },
	{ id: 2, producto: "Agua", precio: 0.2 },
	{ id: 3, producto: "Aceite", precio: 3 },
]

function App() {
	return (
		 <header>
				<h1>Productos</h1>
			</header>
			<main>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Precio</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</main>
	)
}

export default App
