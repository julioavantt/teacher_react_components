import { useState } from "react"
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
	const [showTable, setShowTable] = useState(true)

	const handleButtonClose = () => setShowTable(false)
	const handleButtonOpen = () => setShowTable(true)

	return (
		<div className="container">
			<Header />
			<span>SHOW TABLE VALE: {JSON.stringify(showTable)}</span>
			<br />
			<button onClick={handleButtonClose}>Ocultar lista</button>
			<button onClick={handleButtonOpen}>Mostrar lista</button>
			<main>
				{showTable && (
					<Table listaOriginalProductos={listaOriginalProductos} />
				)}
			</main>
		</div>
	)
}

export default App
