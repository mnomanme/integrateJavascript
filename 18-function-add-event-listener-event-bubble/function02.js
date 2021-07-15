// 19-1 When to use a function, use function inside a loop

// step two

function evenify(number) {
	if (number % 2 == 0) {
		console.log(number, ': is even number');
	} else {
		console.log(number, ': is odd number');
	}
}

// only numbers
nums = [10, 1, 2, 3, 4, 5, 6];

for (let i = 0; i < nums.length; i++) {
	const result = nums[i];
	evenify(result); // call by function
}

// only friends ages
friendAge = [32, 34, 57, 8, 4, 43];

for (let i = 0; i < friendAge.length; i++) {
	const result = friendAge[i];
	evenify(result); // call by function
}
