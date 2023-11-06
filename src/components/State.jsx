import { useState } from "react"
import { v4 as uuid } from "uuid"

import { Table } from "./Table"

export const listaOriginalProductos = [
	{ id: uuid(), producto: "Azucar", precio: 1 },
	{ id: uuid(), producto: "Agua", precio: 0.2 },
	{ id: uuid(), producto: "Aceite", precio: 3 },
]

function State() {
	//!     state        setter              argument (es el valor del estado en 1er render)
	const [showTable, setShowTable] = useState(true)
	const [count, setCount] = useState(10)

	const handleButtonClose = () => setShowTable(false)
	const handleButtonOpen = () => setShowTable(true)

	return (
		<div className="container">
			<span>COUNT: {count}</span>
			<button
				onClick={() => {
					setCount(prev => prev + 1)
				}}
			>
				Agregar
			</button>
			<br></br>
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

export default State
