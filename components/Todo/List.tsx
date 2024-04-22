import ListItem from "@/components/Todo/ListItem";

export default function List({ todoList, setTodo }) {
	return (
		<div className="wrapper-list">
			<ul>
				{todoList && todoList.length > 0 ? (
					todoList.map((item, idx) => (
						<ListItem key={idx} item={item} setTodo={setTodo} />
					))
				) : (
					<p className="text-center">
						Seems lonely in here, what are you up to?
					</p>
				)}
			</ul>
		</div>
	);
}
