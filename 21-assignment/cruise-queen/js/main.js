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
	ticketTotal();
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
	// calculate economy class ticket price
	ticketTotal();
}

function ticketTotal() {
	const firstClassTicket = document.getElementById('firstClassCount');
	const firstClassTicketCount = parseInt(firstClassTicket.value);

	const economyTicket = document.getElementById('economyCount');
	const economyTicketCount = parseInt(economyTicket.value);

	const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
	const vat = subTotal / 10;
	const total = subTotal + vat;

	document.getElementById('subTotal').innerText = subTotal;
	document.getElementById('vatCharge').innerText = vat;
	document.getElementById('total').innerText = total;
}
