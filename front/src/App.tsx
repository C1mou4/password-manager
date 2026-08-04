import { useState } from "react";
import { Button } from "../components/ui/button";
import "./App.css";

function App() {
	const fetchData = async () => {
		const rep = await fetch("/create");
		const data = await rep.json();
		console.clear();
		console.log(data);
	};
	return (
		<>
			<h1>Mots de passes</h1>

			<Button variant={"outline"} onClick={() => fetchData()}>
				Création
			</Button>
		</>
	);
}

export default App;
