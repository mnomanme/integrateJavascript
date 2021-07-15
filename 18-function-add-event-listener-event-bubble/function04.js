// 19-1 When to use a function, use function inside a loop

// step four

function evenifyAll(nums) {
	for (let i = 0; i < nums.length; i++) {
		const number = nums[i];
		if (number % 2 == 0) {
			console.log(number, ': is even number');
		} else {
			console.log(number, ': is odd number');
		}
	}
}

numbers = [10, 1, 2, 3, 4, 5, 6];
evenifyAll(numbers);

friendsAges = [77, 34, 23, 12, 10, 20];
evenifyAll(friendsAges);
