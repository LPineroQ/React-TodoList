import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoList = (props) => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

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
			<button class="btn btn-primary" type="submit" onClick={addTodo}>
				Añadir tarea
			</button>
			<ul>
				{todos.map((todo) => {
					console.log(todos);
					return (
						<li key={todo.id}>
							{todo.title}
							<button
								class="btn btn-outline-warning"
								type="submit"
								onClick={() => deleteTodo(todo.id)}>
								Borrar
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ToDoList;
