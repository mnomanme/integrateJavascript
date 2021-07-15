// 19-1 When to use a function, use function inside a loop

// step three

// length check
function evenifyAll(nums) {
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		evenify(num);
	}
}

// condition check
function evenify(number) {
	if (number % 2 == 0) {
		console.log(number, ': is even number');
	} else {
		console.log(number, ': is odd number');
	}
}

numbers = [10, 1, 2, 3, 4, 5, 6];
evenifyAll(numbers); // call by function

friendsAge = [32, 21, 40, 19];
evenifyAll(friendsAge); // call by function
