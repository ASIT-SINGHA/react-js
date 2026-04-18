function Container({
	children,
	txtColor = "text-white",
	borderColor = "border-black",
}) {
	return <div className={`lg:w-[60%] md:w-[70%] sm:w-10/12 w-[80%] overflow-hidden ${txtColor} border-2 ${borderColor} p-2 m-auto`}>{children}</div>;
}
export default Container;
