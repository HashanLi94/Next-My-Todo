import React from "react";

export default function Listitem({ item, setTodo }) {
	const onCompleteTodo = () => {
		setTodo((preTodos: any) =>
			preTodos.map((todo: any) =>
				todo.id === item.id
					? { ...todo, is_completed: !todo.is_completed }
					: todo
			)
		);
	};

	const onRemoveTodo = () => {
		setTodo((preTodo: any) =>
			// preTodo.filter((todo: any) => todo.id != item.id)
			preTodo.filter((todo: any) => {
				return todo.id != item.id;
			})
		);
	};

	const [editing, setEditing] = React.useState(false);

	const inputRef = React.useRef(null);

	const onEditTodo = () => {
		setEditing(true);
	};

	const handleBlur = () => {
		setEditing(false);
	};

	const handleChange = (event: any) => {
		event?.preventDefault();

		setTodo((prevTodos: any) =>
			prevTodos.map((todo: any) =>
				todo.id === item.id ? { ...todo, title: event.target.value } : todo
			)
		);
	};

	React.useEffect(() => {
		if (editing && inputRef.current) {
			inputRef.current.focus();

			// position the cursor at the end of the text
			inputRef.current.setSelectionRange(
				inputRef.current.value.length,
				inputRef.current.value.length
			);
		}
	}, [editing]);
	return (
		<li className="wrapper-list-item flex items-center justify-between text-white w-full mb-6">
			{editing ? (
				/* if editing true: shows the editing part */
				<div className="w-full">
					<input
						type="text"
						className="w-full px-3 py-2 rounded-lg bg-[#41454C] opacity-80"
						placeholder="Edit your task here..."
						name="editTodo"
						defaultValue={item?.title}
						onBlur={handleBlur}
						onChange={handleChange}
						ref={inputRef}
					/>
				</div>
			) : (
				/* else shows the editing part */
				<div className="w-full flex items-center justify-between  border-2 border-[#9b8f7b] px-4 py-2 rounded-lg">
					<div
						onClick={onCompleteTodo}
						className="item-desc cursor-pointer flex items-center justify-start space-x-2"
					>
						<div
							className={`item-status w-4 h-4 rounded-full ${
								item.is_completed
									? " bg-[#88ab33]"
									: "bg-transparent border-2 border-[#88ab33]"
							}`}
						></div>
						<p className={`text-sm ${item.is_completed ? "line-through" : ""}`}>
							{item.title}
						</p>
					</div>
					<div className="item-actions flex items-center justify-start space-x-2">
						<button type="button" onClick={onEditTodo}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
								/>
							</svg>
						</button>
						<button type="button" onClick={onRemoveTodo}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</li>
	);
}
