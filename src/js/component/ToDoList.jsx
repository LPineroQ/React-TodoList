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
							<b>{todo.title}</b>
							<button
								class="btn btn-success"
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
