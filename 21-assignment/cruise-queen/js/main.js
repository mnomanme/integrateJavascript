// first class ticket increase
document.getElementById('firstClassIncreament').addEventListener('click', function () {
	handleFirstClassTicket(true);
});

// first class ticket decrease
document.getElementById('firstClassDecreament').addEventListener('click', function () {
	handleFirstClassTicket(false);
});

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
	const firstClassTicketPrice = firstClassNewTicket * 150;
	document.getElementById('subTotal').innerText = firstClassTicketPrice;
}
