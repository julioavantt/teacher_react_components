const GrandChild = ({ title }) => <button>{title}</button>

export const Child = ({ title = "Manda el título wey", data }) => {
	return (
		<>
			<h4>{title}</h4>
			<p>{data}</p>
			<GrandChild title={title} />
		</>
	)
}
