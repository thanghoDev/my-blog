import { useState } from "react";

const training = [
	{
		id: 1,
		name: "Git / linux",
	},
	{
		id: 2,
		name: "HTML / CSS",
	},
	{
		id: 3,
		name: "JavaScript",
	},
	{
		id: 4,
		name: "Typescript",
	},
	{
		id: 5,
		name: "React",
	},
];

function TwoWayBinding() {
	const [checked, setChecked] = useState([0]);

	const handleCheck = (id: number) => {
		setChecked((prev) => {
			const isChecked = checked.includes(id);
			if (isChecked) {
				return checked.filter((item) => item !== id);
			} else {
				return [...prev, id];
			}
		});
	};
	const handleSubmit = () => {
		console.log({ id: checked });
	};
	return (
		<div>
			{training.map((list) => (
				<div key={list.id}>
					<input
						type="checkbox"
						checked={checked.includes(list.id)}
						onChange={() => handleCheck(list.id)}
					/>
					{list.name}
				</div>
			))}
			<button onClick={handleSubmit}> Register</button>
		</div>
	);
}

export default TwoWayBinding;
