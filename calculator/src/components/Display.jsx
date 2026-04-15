function Display ({data}){
  return (
    <div className="w-15/16  bg-[#456882] border-2 m-3 border-[#456882] rounded-md ">
					<input
						className=" outline-none w-full text-right text-4xl p-2 "
						type="text"
						value={data}
					/>
					
				</div>
  )
}
export default Display;