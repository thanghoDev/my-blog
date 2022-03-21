import React from "react";
import TodoList from "./component/todoListWithUseState";
import TwoWayBinding from "./component/Two-way-binding";
import UseState from "./component/useState";
function App() {
	return (
		<React.Fragment>
			<UseState />
			<TwoWayBinding />
			<TodoList />
		</React.Fragment>
	);
}

export default App;
