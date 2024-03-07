import { useState } from "react"

import { Table } from "./Table"

export const listaOriginalProductos = [
	{ producto: "Azucar", precio: 1 },
	{ producto: "Agua", precio: 0.2 },
	{ producto: "Aceite", precio: 3 },
]

function State() {
	//!     state        setter              argument (es el valor del estado en 1er render)
	const [count, setCount] = useState(40)
	const [showTable, setShowTable] = useState(true)

	const handleButtonClose = () => setShowTable(false)
	const handleButtonOpen = () => setShowTable(true)

	return (
		<div className="container">
			<span>COUNT: {count}</span>
			<button
				onClick={() => {
					setCount(prev => prev + 3)
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
