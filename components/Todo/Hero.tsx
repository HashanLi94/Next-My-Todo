export default function Hero({total, completed}) {
	return (
		<div className="wrapper-hero flex flex-row items-center justify-between rounded-lg border-2 border-[#9b8f7b] text-white py-4 px-6">
			<div className="left-side">
				<p className="text-xl">Task Done</p>
				<p className="text-lg">Keep It Up</p>
			</div>
			<div className="right-side">
				<div className="rounded-full bg-[#88ab33] w-24 h-24 flex flex-row items-center justify-center">
					<p className="text-3xl">
						{completed}/{total}
					</p>
				</div>
			</div>
		</div>
	);
}
