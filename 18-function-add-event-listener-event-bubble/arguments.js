// 18-4 arguments and deal with unknown number of arguments

function addNumbers(num1, num2) {
	console.log('Arguments :', arguments[3]); // arguments

	var sum = 0;

	for (let i = 0; i < arguments.length; i++) {
		const num = arguments[i];
		sum = sum + num;
	}
	return sum;
}

var numbersResult = addNumbers(10, 20, 30, 40, 50);
console.log(numbersResult);
