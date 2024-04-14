import Header from "@/components/UI/Header";
import DisplayDate from "@/components/UI/DisplayDate";
import Hero from "@/components/Todo/Hero";
import Form from "@/components/Todo/Form";
import List from "@/components/Todo/List";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<Header />
				<DisplayDate />
			</div>

			<div className="wrapper-body mt-12 w-full md:w-1/2 flex flex-col space-y-8">
				<div className="header">
					<Hero total={5} completed={1}/>
				</div>

				<div className="body flex flex-col space-y-8">
					<Form />
					<List />
				</div>
			</div>
		</main>
	);
}
