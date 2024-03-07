import { Child } from "./Child"

export const Father = () => {
	return (
		<>
			{Child({
				title: " funcion normal",
				buttonText: "Aceptar",
				color: "red",
			})}
			<Child title="Elemento react" buttonText="Salir" color="green" />
		</>
	)
}
