import Container from "./Container";

function TaskStatus() {
	return (
		<Container borderColor="border-amber-100">
			<div className="flex ">
        <div  className="w-2/3  p-4 ">
				<h1 className="text-2xl font-bold">Task Done</h1>
				<h2>Keep it up</h2>
			</div>
			<div className="w-1/3  p-4 flex justify-center items-center bg-green-600 rounded-[50%]" >
				<span className="text-3xl">2/3</span>
			</div>
      </div>
		</Container>
	);
}
export default TaskStatus;
