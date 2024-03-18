import { Fragment } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
	const handleButtonClick = () => {
		console.log("Button clicked !!");
	};
	return (
		<div>
			<Button onClick={handleButtonClick}>Hello</Button>
		</div>
	);
}

export default App;
