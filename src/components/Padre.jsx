import { Child } from "./Child"

export const Father = () => {
	return (
		<>
			<Child title="Título vía props" data="1fdefgrgrerg" />
			<Child title="Otro título" data="2fdefgrgrerg" />
			<Child data="fdefgrgrerg3" />
		</>
	)
}
