import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getTodos } from "../../service/todo.js";

const ToDoList = (props) => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	useEffect(() => {
		getTodos()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	console.log(todos);

	const addTodo = () => {
		const newTodos = todos.concat({
			title: task,
			id: todos.length + 1,
		});
		setTodos(newTodos);
	};

	const deleteTodo = (todoId) => {
		const removeTodo = todos.filter((task) => task.id != todoId);
		setTodos(removeTodo);
	};
	return (
		<div>
			<input
				type="text"
				value={task}
				onChange={(e) => {
					setTask(e.target.value);
				}}></input>
			<button className="btn btn-primary" type="submit" onClick={addTodo}>
				Añadir tarea
			</button>
			<ul>
				{todos.map((todo) => {
					console.log(todos);
					return (
						<li key={todo.id}>
							<b>{todo.title}</b>
							<button
								className="btn btn-success"
								type="submit"
								onClick={() => deleteTodo(todo.id)}>
								Realizada
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ToDoList;
