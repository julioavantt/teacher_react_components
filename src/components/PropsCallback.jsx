const ChildCallback = ({ property }) => {
	console.log(property)
	return <button onClick={property}>Clic</button>
}

export const PropsCallback = () => {
	const handleClick = () => alert(1)

	return <ChildCallback property={handleClick} />
}

const fn = () => ["a", "b"]

const [a, b] = fn()
