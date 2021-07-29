// 21_5-1 Global vs local variable IIFE function expression vs declaration
function ToDo(task) {
	const element = document.createElement('li');
}

// function expression
var taskName = function (task) {
	console.log(taskName);
};

function addUser() {
	let name1 = 'Mohammad';
	const name2 = 'Noman';
	var name3 = 'Faruque';
	name4 = 'Sakib';
	console.log(name1);
	console.log(name2);
	console.log(name3);
	console.log(name4);
}

addUser();
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);

// IIFE
(function () {
	let myName = 'Mohammad';
	console.log(myName);
})();
