const Input = () => {
	return (
	<div className="text-sm text-gray-600 mb-2">
		<label className="block mb-1 font-medium text-gray-700">Input Field
		<input
			type="text"
			placeholder="Type something..."
			className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
		</label>
		</div>
	);
};
export default Input;