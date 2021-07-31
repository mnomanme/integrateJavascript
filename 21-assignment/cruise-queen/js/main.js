// first class ticket increase
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
	const firstClassTicketVat = firstClassTicketPrice / 10;
	const firstClassTicketTotal = firstClassTicketPrice + firstClassTicketVat;

	document.getElementById('subTotal').innerText = firstClassTicketPrice;
	document.getElementById('vatCharge').innerText = firstClassTicketVat;
	document.getElementById('total').innerText = firstClassTicketTotal;
}
