import Container from "./Container";
import { FaRegEdit,FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
let count = 0;

function TaskList() {
  const taskListArray = [
    { id: 1, title: "rectjs", isCheck: true },
    { id: 2, title: "DSA", isCheck: true },
    { id: 3, title: "Backend", isCheck: true },
    { id: 4, title: "JS", isCheck: true },
  ];
	return (
		<Container>
			<div className="border-2 flex p-2 rounded-sm">
        <FaCheckCircle className="m-2 text-xl"/>
				<p className="grow m-1 text-2xl">hi asit</p>
        <FaRegEdit  className="m-2 text-xl"/>
        <MdDelete className="m-2 text-xl"/>
			</div>
		</Container>
	);
}
export default TaskList;
