import { useState } from "react";

function TodoList() {
	const listJobs = localStorage.getItem("jobs");
	const storageJobs = JSON.parse(listJobs || "[]");
	const [job, setJob] = useState("");
	const [jobs, setJobs] = useState(storageJobs ?? ['']);
	const handleSubmit = () => {
		setJobs((prev: any) => {
			const newJobs = [...prev, job];

			// save to local storage
			const jsonJobs = JSON.stringify(newJobs);
			localStorage.setItem("jobs", jsonJobs);
			return newJobs;
		});
		setJob("");
	};
	return (
		<div>
			<input value={job} onChange={(e) => setJob(e.target.value)} />
			<button onClick={handleSubmit}> Add </button>

			<ul>
				{jobs.map((job: string, index: number) => (
					<li key={index}>{job}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
