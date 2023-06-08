import "./App.css"

/* export const listaOriginalProductos = [
	{ id: uuid(), producto: "Azucar", precio: 1 },
	{ id: uuid(), producto: "Agua", precio: 0.2 },
	{ id: uuid(), producto: "Aceite", precio: 3 },
] */

const Button = ({ text = "Aceptar", bgColor, className, click }) => (
	<button
		onClick={click}
		style={{ backgroundColor: bgColor }}
		className={className}
	>
		{text}
	</button>
)

function App1() {
	const handleClick = () => alert(1)

	return (
		<>
			<Button
				click={handleClick}
				className="component"
				text="Cancel"
				bgColor="red"
			/>
			<Button
				click={handleClick}
				className="component"
				text="Alert"
				bgColor="blue"
			/>
			<Button click={handleClick} className="component" bgColor="orange" />
		</>
	)
}

export default App1
