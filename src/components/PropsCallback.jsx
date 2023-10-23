const ChildCallback = ({ click }) => <button onClick={click}>Clic</button>

export const PropsCallback = () => {
	const handleClick = () => alert()

	return <ChildCallback click={handleClick} />
}
