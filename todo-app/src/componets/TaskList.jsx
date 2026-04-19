import Container from "./Container";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";

function TaskList({ taskList, setTaskList }) {
	function handleChackBox(taskId) {
		let newArr = [...taskList];
		newArr[taskId].status = !newArr[taskId].status;
		setTaskList(newArr);
	}

	return (
		<Container>
			{taskList.map((task) => {
				return (
					<div key={task.id} className="border-2 flex p-2 rounded-sm">
						<div
							onClick={() => {
								handleChackBox(task.id);
							}}
						>
							{task.status == true ? (
								<FaCheckCircle className="m-2 text-xl " />
							) : (
								<FaRegCircle className="m-2 text-xl" />
							)}
						</div>
						<p className="grow m-1 text-2xl">{task.title}</p>
						<FaRegEdit className="m-2 text-xl" />
						<MdDelete className="m-2 text-xl" />
					</div>
				);
			})}
		</Container>
	);
}
export default TaskList;
