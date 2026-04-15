const btn = [
	"AC",
	"D",
	"%",
	"/",
	"7",
	"8",
	"9",
	"*",
	"4",
	"5",
	"6",
	"-",
	"1",
	"2",
	"3",
	"+",
	"0",
	"00",
	".",
	"=",
];

function Btn({ data, setData }) {
	const clickHandler = (e) => {
		if (e.target.innerText == "AC") {
			setData("");
		} else if (e.target.innerText == "D") {
			setData(data.slice(0, -1));
		} else if (e.target.innerText == "=") {
			setData(eval(data));
		} else {
			setData(data + e.target.innerText);
		}
	};
	return (
		<div className="grid grid-cols-4 gap-2 m-2 text-amber-100">
			{btn.map((txt) => (
				<div className="grid grid-cols-4 gap-1 ">
					<button
						className="bg-gray-600 size-16 rounded-2xl"
						onClick={clickHandler}
					>
						{txt}
					</button>{" "}
				</div>
			))}
		</div>
	);
}
export default Btn;
