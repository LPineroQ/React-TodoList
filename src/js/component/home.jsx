import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TodoList from "./todoList.jsx";

//create your first component
const Home = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	console.log({ newTodo });

	const handleClick = () => {
		console.log("Click");
		const newListTodo = [...listTodo, newTodo];
		setListTodo(newListTodo);
	};

	const deleteTodo = (todo) => {
		const removeTodo = listTodo.filter((newTodo) => todo.id != newTodo.id);
		setListTodo(removeTodo);
	};

	console.log({ listTodo });

	return (
		<div className="col-md-6 offset-md-2">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Cosas que hacer</Form.Label>
					<Form.Control
						type="text"
						placeholder="Write here..."
						onChange={(e) => setNewTodo(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="button" onClick={handleClick}>
					Añadir
				</Button>
				{listTodo.map((todo, index) => (
					<TodoList
						key={index}
						id={index}
						deleteTodo={deleteTodo}
						todo={todo}
					/>
				))}
			</Form>
		</div>
	);
};

export default Home;
