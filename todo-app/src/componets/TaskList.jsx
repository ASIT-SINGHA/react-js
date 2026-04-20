import Container from "./Container";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import { useState } from "react";
import AddTask from "./AddTask";

function TaskList({ taskList, setTaskList, setcompletedTaskCount }) {
	const [isEdit, setIsEdit] = useState(false);

	function handleChackBox(taskId) {
		let newTempTask = taskList.map((tsk) =>
			tsk.id === taskId ? { ...tsk, status: !tsk.status } : tsk,
		);

		let competedTaskCount = newTempTask.filter((tsk) => {
			return tsk.status === true;
		});

		setcompletedTaskCount(competedTaskCount.length);
		setTaskList(newTempTask);
	}

	function handleTaskDel(TaskId) {
		setTaskList(taskList.filter((task) => task.id !== TaskId));
	}

	return (
		<Container>
			{taskList.map((task) => {
				return (
					<div key={task.id} className="border-2 flex p-2 rounded-sm">
						{task.status == true ? (
							<FaCheckCircle
								onClick={() => {
									handleChackBox(task.id);
								}}
								className="m-2 text-xl "
							/>
						) : (
							<FaRegCircle
								onClick={() => {
									handleChackBox(task.id);
								}}
								className="m-2 text-xl"
							/>
						)}

						<input
							type="text"
							onChange={(e) => {
								if (isEdit) {
									let tempArray = [...taskList];
									tempArray[task.id].title = e.target.value;
									setTaskList(tempArray);
								}
							}}
							value={task.title}
							className="grow outline-none"
						/>
						{isEdit && (
							<button
								onClick={() => {
									setIsEdit(!isEdit);
								}}
								className=" border-2 px-2 text-md rounded-2xl"
							>
								save
							</button>
						)}
						<FaRegEdit
							onClick={() => {
								setIsEdit(!isEdit);
							}}
							className="m-2 text-xl"
						/>
						<MdDelete
							onClick={() => {
								handleTaskDel(task.id);
							}}
							className="m-2 text-xl"
						/>
					</div>
				);
			})}
		</Container>
	);
}
export default TaskList;
