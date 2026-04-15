import { useState } from "react";
import Display from "./components/Display";
import Btn from "./components/Btn";

function App() {
	const [data, setData] = useState("");
	return (
		<div
			className=" flex flex-col  items-center h-screen bg-gray-800 text-amber-50 p-4 "
		>
			<h1 className="text-center text-4xl p-4">Calculator</h1>

			<div className=" w-80 h-115 bg-gray-700 rounded-2xl">
				<Display data={data} />
				<Btn data={data} setData={setData} />
			</div>
		</div>
	);
}

export default App;
