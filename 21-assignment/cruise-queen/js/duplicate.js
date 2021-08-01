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

// first class ticket
function handleFirstClassTicket(addFirstTicket) {
	const firstClassTicket = document.getElementById('firstClassCount');
	const firstClassTicketCount = parseInt(firstClassTicket.value);

	let firstClassNewTicket = firstClassTicketCount;
	if (addFirstTicket == true) {
		firstClassNewTicket = firstClassTicketCount + 1;
	}
	if (addFirstTicket === false && firstClassNewTicket > 0) {
		firstClassNewTicket = firstClassTicketCount - 1;
	}
	firstClassTicket.value = firstClassNewTicket;
	// calculate first class ticket price
	const firstClassTicketPrice = firstClassNewTicket * 150;
	const firstClassTicketVat = firstClassTicketPrice / 10;
	const firstClassTicketTotal = firstClassTicketPrice + firstClassTicketVat;

	document.getElementById('subTotal').innerText = firstClassTicketPrice;
	document.getElementById('vatCharge').innerText = firstClassTicketVat;
	document.getElementById('total').innerText = firstClassTicketTotal;
}

// economy class ticket
function handleEconomyTicket(addEconomyTicket) {
	const economyTicket = document.getElementById('economyCount');
	const economyTicketCount = parseInt(economyTicket.value);

	let economyNewTicket = economyTicketCount;
	if (addEconomyTicket === true) {
		economyNewTicket = economyTicketCount + 1;
	}
	if (addEconomyTicket === false && economyNewTicket > 0) {
		economyNewTicket = economyTicketCount - 1;
	}
	economyTicket.value = economyNewTicket;
	// calculate economy ticket price
	const economyTicketPrice = economyNewTicket * 100;
	const economyTicketVat = economyTicketPrice / 10;
	const economyTicketTotal = economyTicketPrice + economyTicketVat;

	document.getElementById('subTotal').innerText = economyTicketPrice;
	document.getElementById('vatCharge').innerText = economyTicketVat;
	document.getElementById('total').innerText = economyTicketTotal;
}
