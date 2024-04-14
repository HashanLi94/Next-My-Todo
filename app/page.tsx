"use client";
import Header from "@/components/UI/Header";
import DisplayDate from "@/components/UI/DisplayDate";
import Hero from "@/components/Todo/Hero";
import Form from "@/components/Todo/Form";
import List from "@/components/Todo/List";
import React from "react";

export default function Home() {
	// state for the toodos
	const [todos, setTodo] = React.useState([]);

	const totalTodos = todos.length;

	const completedTodos = todos.filter((e) => e.is_completed).length;

	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<Header />
				<DisplayDate />
			</div>

			<div className="wrapper-body mt-12 w-full md:w-1/2 flex flex-col space-y-8">
				<div className="header">
					<Hero total={totalTodos} completed={completedTodos} />
				</div>

				<div className="body flex flex-col space-y-8">
					<Form setTodo={setTodo} />
					<List todoList={todos} setTodo={setTodo} />
				</div>
			</div>
		</main>
	);
}
