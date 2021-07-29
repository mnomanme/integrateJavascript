function displayTotal(phone, casing) {
	const phonePrice = 600;
	const casingPrice = 40;
	const phoneCost = phone * phonePrice;
	const casingCost = casing * casingPrice;

	const total = phoneCost + casingCost;
	const totalElement = document.getElementById('total');
	totalElement.innerText = total;
}
function getInputTotal(phone, casing) {
	const phonePrice = 600;
	const casingPrice = 40;
	const phoneCost = phone * phonePrice;
	const casingCost = casing * casingPrice;

	const total = phoneCost + casingCost;
	const totalElement = document.getElementById('total');
	totalElement.innerText = total;
}

const total = getInputTotal(3, 20);
console.log(total);
const firstResult = document.getElementById('first-result');
firstResult.innerText = total;

const secondResult = document.getElementById('second-result');
secondResult.innerText = total;
