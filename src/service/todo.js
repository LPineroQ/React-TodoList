export const getTodos = () => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/LPineroQ", {
		method: "GET",
	})
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	})
};
