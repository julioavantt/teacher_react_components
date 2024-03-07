const Button = ({ buttonText, color }) => (
	<button style={{ backgroundColor: color }}>{buttonText}</button>
)

export const Child = props => {
	console.log(props)
	return (
		<>
			<h4>{props.title}</h4>
			<Button buttonText={props.buttonText} color={props.color} />
			<hr />
		</>
	)
}
