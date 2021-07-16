// 18-2 When to return from a function and from where

// length check
function evenifyAll(nums) {
	var evenArray = [];
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		var array = evenify(num);
		evenArray.push(array);
	}
	return evenArray;
}

// condition check
function evenify(number) {
	var result;
	if (number % 2 == 0) {
		// return number;
		result = number;
	} else {
		// return number;
		result = number * 2;
	}
	return result;
}

var result = evenify(12);
var square = result * result;
console.log('result =', square);

var numbers = [10, 1, 2, 3, 4, 5, 6];
var numsEven = evenifyAll(numbers); // call by function
console.log(numsEven);

var friendsAge = [32, 21, 40, 19];
var friendsEven = evenifyAll(friendsAge); // call by function
console.log(friendsEven);
