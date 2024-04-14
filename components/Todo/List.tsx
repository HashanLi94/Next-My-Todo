import ListItem from "@/components/Todo/ListItem";
export default function List() {
	return (
		<div className="wrapper-list">
			<ul>
				<li className="mb-6">
					<ListItem />
				</li>
				<li className="mb-6">
					<ListItem />
				</li>
				<li className="mb-6">
					<ListItem />
				</li>
			</ul>
		</div>
	);
}
