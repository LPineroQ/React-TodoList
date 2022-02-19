import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoList = (props) => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	console.log({ newTodo });
	const handleClick = () => {
		console.log("Click");
		const newListTodo = listTodo.concat({
			title: newTodo,
			id: listTodo.length + 1,
		});
		setListTodo(newListTodo);
	};

	const deleteTodo = (todo) => {
		const removeTodo = listTodo.filter((newTodo) => todo.id != newTodo.id);
		setListTodo(removeTodo);
	};

	console.log({ listTodo });
	console.log({ props });
	return (
		<div>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.target.value);
				}}></input>
			<button onClick={handleClick}>Añadir tarea</button>
			<ul>
				{listTodo.map((listTodo) => {
					console.log(listTodo);
					return (
						<li key={listTodo.id}>
							{listTodo.title}
							<button onClick={() => deleteTodo(listTodo.id)}>
								Borrar
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

ToDoList.propTypes = {
	id: PropTypes.number,
	todo: PropTypes.string,
	deleteTodo: PropTypes.func,
};

export default ToDoList;
