import { useState } from "react";

const orders = [100, 200, 300];

function UseState() {
	// initial state with callback

	const [counter, setCounter] = useState(() => {
		const total = orders.reduce((total, cur) => total + cur);
		return total;
	});
	const handleIncrease = () => {
		setCounter(counter + 1);

		// set state with callback
		// setCounter((prevState) => prevState + 1);
		// setCounter((prevState) => prevState + 1);
		// setCounter((prevState) => prevState + 1);
	};
	return (
		<div className="App">
			<h1>{counter}</h1>
			<button onClick={handleIncrease}>Increase</button>
		</div>
	);
}

export default UseState;
