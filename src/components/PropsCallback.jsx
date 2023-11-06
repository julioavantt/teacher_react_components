const ChildCallback = ({ clock }) => <button onClick={clock}>Clic</button>

export const PropsCallback = () => {
	const handleClick = () => console.log(1)

	return <ChildCallback clock={handleClick} />
}
