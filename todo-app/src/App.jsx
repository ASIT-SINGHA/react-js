import Container from "./componets/Container";
import AddTask from "./componets/AddTask";
import TaskStatus from "./componets/TaskStatus";
import TaskList from "./componets/TaskList";
import { useState } from "react";

function App() {
	const [taskList, setTaskList] = useState([]);
	const [completedTaskCount,setcompletedTaskCount]=useState(0)
	return (
		<Container>
			<TaskStatus taskList={taskList} completedTaskCount={completedTaskCount}/>
			<AddTask
				taskList={taskList}
				setTaskList={setTaskList}
			/>
			<TaskList taskList={taskList} setTaskList={setTaskList} setcompletedTaskCount={setcompletedTaskCount} />
		</Container>
	);
}

export default App;
