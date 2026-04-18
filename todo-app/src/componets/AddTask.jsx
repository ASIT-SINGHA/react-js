import Container from "./Container";

function AddTask() {
	return (
		<Container>
			<div  className="flex mt-5  ">
				<input
				type="text"
				placeholder="Write your next task"
				className="outline-none rounded-md  grow bg-gray-900  p-2 "
			/>
			<button className="bg-green-500 px-2  rounded-[50%] text-3xl ml-12">
				+
			</button>
			</div>
      
		</Container>
	);
}
export default AddTask;
