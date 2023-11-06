import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
import { LinkedIn, YouTube } from "@mui/icons-material"

import "./App.css"

import { Invocate } from "./components/Invocate"
import { PropsCallback } from "./components/PropsCallback"
import { Father } from "./components/Padre"
import { ComponentTypes } from "./components/ComponentTypes"
import State from "./components/State"

//! IMPORTS
import { Age, Name } from "./components/NamedImport"

import DefaultImport from "./components/DefaultImport"

function App() {
	return (
		<BrowserRouter>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Components 1</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Component functions types</Nav.Link>
						<Nav.Link href="/named-import">Named Import</Nav.Link>
						<Nav.Link href="/default-import">Default Import</Nav.Link>
						<Nav.Link href="/invocate">Invocate</Nav.Link>
						<Nav.Link href="/props">Props</Nav.Link>
						<Nav.Link href="/props-callback">Props Callback</Nav.Link>
						<Nav.Link href="/state">State</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Container className="mt-4">
				<Routes>
					<Route path="/" element={<ComponentTypes />} />
					<Route
						path="/named-import"
						element={
							<>
								<Name />
								<Age />
							</>
						}
					/>
					<Route path="/default-import" element={<DefaultImport />} />
					<Route path="/invocate" element={<Invocate />} />
					<Route path="/props" element={<Father />} />
					<Route path="/props-callback" element={<PropsCallback />} />
					<Route path="/state" element={<State />} />
				</Routes>
			</Container>
			<footer bg="dark" variant="dark">
				<Container className="d-flex justify-content-between">
					<div>Creado por Julio Avantt!</div>
					<div>
						<Link
							to="https://www.youtube.com/@juniorpride"
							className="youtube"
						>
							<YouTube />
						</Link>
						<Link to="https://www.linkedin.com/in/julio-avantt/">
							<LinkedIn />
						</Link>
					</div>
				</Container>
			</footer>
		</BrowserRouter>
	)
}

export default App
