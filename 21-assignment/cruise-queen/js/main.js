// first class ticket increase
document.getElementById('firstClassIncreament').addEventListener('click', function () {
	// console.log('plus increase');
	const firstClassInput = document.getElementById('firstClassCount');
	const firstClassCount = parseInt(firstClassInput.value);
	// console.log(typeof firstClassCount);
	const firstClassNewCount = firstClassCount + 1;
	// console.log(firstClassNewCount);
	firstClassInput.value = firstClassNewCount;
	// subtotal
	const firstClassTicketPrice = firstClassNewCount * 150;
	document.getElementById('subTotal').innerText = firstClassTicketPrice;
});

// first class ticket decrease
document.getElementById('firstClassDecreament').addEventListener('click', function () {
	// console.log('minus decrease');
	const firstClassInput = document.getElementById('firstClassCount');
	const firstClassCount = parseInt(firstClassInput.value);
	const firstClassNewCount = firstClassCount - 1;
	// console.log(firstClassNewCount);
	firstClassInput.value = firstClassNewCount;
	// subtotal
	const firstClassTicketPrice = firstClassNewCount * 150;
	document.getElementById('subTotal').innerText = firstClassTicketPrice;
});
