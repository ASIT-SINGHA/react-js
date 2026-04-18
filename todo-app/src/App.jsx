import Container from "./componets/Container";
import AddTask from "./componets/AddTask";
import TaskStatus from "./componets/TaskStatus";
import TaskList from "./componets/TaskList";

function App() {
	return (
	< Container >
		<TaskStatus />
		<AddTask />
		<TaskList />
		<TaskList />
		<TaskList />

	</Container>
	);
}

export default App;
