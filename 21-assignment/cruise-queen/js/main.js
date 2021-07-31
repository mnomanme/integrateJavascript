// first class increase
document.getElementById('first-class-increament').addEventListener('click', function () {
	// console.log('click me');
	const firstAdd = document.getElementById('first-class-count');
	// console.log(typeof firstAdd.value);
	const firstCount = parseInt(firstAdd.value);
	// console.log(typeof firstCount);
	const firstNewCount = firstCount + 1;
	firstAdd.value = firstNewCount;
	// console.log(firstNewCount);

	// firstClassTotal = firstNewCount * 150;
	// document.getElementById('sub-total').innerText = firstClassTotal;
});

//  first class decrease
document.getElementById('first-class-decreament').addEventListener('click', function () {
	// console.log('decrease');
	const firstClassInput = document.getElementById('first-class-count');
	// console.log(typeof firstClassInput.value);
	// console.log(firstClassInput.value);
	const firstClassCount = parseInt(firstClassInput.value);
	const firstClassNewCount = firstClassCount - 1;
	firstClassInput.value = firstClassNewCount;

	// firstClassTotal = firstClassNewCount * 150;
	document.getElementById('sub-total').innerText = calculateTotal();
});

// sub total calculate
function calculateTotal() {
	const firstClassInput = document.getElementById('first-class-count');
	const firstClassCount = parseInt(firstClassInput.value);

	const economyInput = document.getElementById('economy-count');
	const economyCount = parseInt(economyInput.value);

	const subtotal = firstClassCount * 150 + economyCount * 100;
	console.log('subtotal', subtotal);
	console.log(typeof subtotal);
	document.getElementById('sub-total').innerText = subtotal;
}

// economy class increase
document.getElementById('economy-increament').addEventListener('click', function () {
	const economyInput = document.getElementById('economy-count');
	const economyCount = parseInt(economyInput.value);
	const economyNewCount = economyCount + 1;
	economyInput.value = economyNewCount;

	const economyTotal = economyNewCount * 100;
	document.getElementById('sub-total').innerText = economyTotal;
});

// economy class decrease
document.getElementById('economy-decreament').addEventListener('click', function () {
	const economyInput = document.getElementById('economy-count');
	const economyCount = parseInt(economyInput.value);
	const economyNewCount = economyCount - 1;
	economyInput.value = economyNewCount;

	const economyTotal = economyNewCount * 100;
	document.getElementById('sub-total').innerText = economyTotal;
});
