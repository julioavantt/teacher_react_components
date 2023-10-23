function FunctionDeclaration() {
	return <h1>Function Declaration</h1>
}

const RegularFunctionExpression = function () {
	return <h2>Regular Function Expression</h2>
}

const ArrowFunctionExpression = () => {
	return <h3>Arrow Function Expression</h3>
}

const ArrowFunctionExpressionImplicitReturn = () => (
	<h4>Arrow Function Expression</h4>
)

export const ComponentTypes = () => {
	return (
		<>
			<FunctionDeclaration />
			<RegularFunctionExpression />
			<ArrowFunctionExpression />
			<ArrowFunctionExpressionImplicitReturn />
		</>
	)
}
