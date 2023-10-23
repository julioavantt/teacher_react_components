import { Child } from "./Child"

export const Father = () => {
	return (
		<>
			<Child title="Título vía props" />
			<Child title="Otro título" />
		</>
	)
}
