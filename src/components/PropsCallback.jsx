const ChildCallback = ({ click }) => <button onClick={click}>Clic</button>

export const PropsCallback = () => {
	const handleClick = () => console.log(1)

	return <ChildCallback click={handleClick} />
}
