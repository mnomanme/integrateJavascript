// 19-1 When to use a function, use function inside a loop

// step one

// find numbers even and odd

nums = [5, 3, 8, 12, 79, 4, 88, 9];
Number;

for (let i = 0; i < nums.length; i++) {
	const num = nums[i];
	// console.log(num * 2);
	if (num % 2 == 0) {
		console.log(num, ': Number is even number');
	} else {
		console.log(num, ': Number is odd number');
	}
}

// find friends age even and odd

friendsAge = [12, 15, 18, 24, 27];

for (let i = 0; i < friendsAge.length; i++) {
	const age = friendsAge[i];
	// console.log(age);
	if (age % 2 == 0) {
		console.log(age, ': Age is even number');
	} else {
		console.log(age, ': Age is odd number');
	}
}
