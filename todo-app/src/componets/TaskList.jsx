import Container from "./Container";
import { FaRegEdit, FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";

function TaskList({ taskList, setTaskList }) {
  
  return (
    <Container>
			{taskList.map((task) => {
        return (
        <div className="border-2 flex p-2 rounded-sm">
					{task.status == true ?<FaCheckCircle className="m-2 text-xl" />: <FaRegCircle className="m-2 text-xl" />}
					<p key={task.id} className="grow m-1 text-2xl">
          {task.title}
					</p>
					<FaRegEdit className="m-2 text-xl" />
					<MdDelete className="m-2 text-xl" />
				</div>
			)})}
		</Container>
	);
}
export default TaskList;
