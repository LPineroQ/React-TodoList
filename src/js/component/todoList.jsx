import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
	console.log({ props });
	return <div onClick={() => props.deleteTodo(props.id)}>{props.todo}</div>;
};

TodoList.propTypes = {
	id: PropTypes.number,
	todo: PropTypes.string,
	deleteTodo: PropTypes.func,
};

export default TodoList;
