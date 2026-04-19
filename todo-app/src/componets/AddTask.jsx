import { useState } from "react";
import Container from "./Container";
import { IoIosAddCircle } from "react-icons/io";

function AddTask({ taskList, setTaskList, nextId }) {
	const [tempTask, setTempTask] = useState("");

	function handleAddTaskList() {
		setTaskList([
			...taskList,
			{ id: nextId, title: tempTask, status: false },
		]);
		setTempTask("");
	}
	return (
		<Container>
			<div className="flex mt-5  ">
				<input
					onChange={(e) => {
						setTempTask(e.target.value);
					}}
					type="text"
					value={tempTask}
					placeholder="Write your next task"
					className="outline-none rounded-md  grow bg-gray-900  p-2 "
				/>
				<IoIosAddCircle
					onClick={handleAddTaskList}
					className="text-4xl"
				/>
			</div>
		</Container>
	);
}
export default AddTask;
