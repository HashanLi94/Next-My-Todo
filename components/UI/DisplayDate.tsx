export default function DisplayDate() {
	return (
		<div className="wrapper-date">
			<p className="text-white text-lg"> {new Date().getFullYear()}</p>
		</div>
	);
}
