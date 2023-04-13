import { v4 as uuid } from "uuid"

import "./App.css"
import { Header } from "./components/Header"
import { Table } from "./components/Table"

export const listaOriginalProductos = [
	{ id: uuid(), producto: "Azucar", precio: 1 },
	{ id: uuid(), producto: "Agua", precio: 0.2 },
	{ id: uuid(), producto: "Aceite", precio: 3 },
]

function App() {
	return (
		<div className="container">
			<Header />
			<main>
				<Table listaOriginalProductos={listaOriginalProductos} />
			</main>
		</div>
	)
}

export default App
