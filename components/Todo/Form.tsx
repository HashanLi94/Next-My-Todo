import { FormEvent } from "react";

export default function Form({ setTodo }) {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const todoTitle: any = event.target.todo.value;

		if (todoTitle) {
			const newTodo = {
				title: todoTitle,
				id: self.crypto.randomUUID(),
				is_completed: false,
			};

			setTodo((pre: any) => [...pre, newTodo]);
		}
		// reset the form
		event.target.reset();
	};
	return (
		<div className="wrapper-form">
			<form
				onSubmit={handleSubmit}
				className="wrapper-form flex flex-row w-full items-center justify-between space-x-2"
			>
				<div className="input-area w-11/12">
					<input
						type="text"
						name="todo"
						className="w-full px-3 py-2 rounded-lg bg-[#41454C] opacity-80"
						placeholder="Write your next task..."
					/>
				</div>
				<div className="button-area">
					<button className="bg-[#88ab33] rounded-full w-8 h-8 p-1 flex items-center justify-center text-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-12 h-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
}
