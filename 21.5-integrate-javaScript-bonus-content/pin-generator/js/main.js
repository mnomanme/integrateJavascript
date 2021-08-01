// success & danger sign
document.getElementById('successSign').style.display = 'none';
document.getElementById('dangerSign').style.display = 'none';

// generate random pin number
function handleRandomPin() {
	const randomPin = Math.random() * 10000;
	const pinCount = (randomPin + '').split('.')[0];

	if (pinCount.length === 4) {
		return pinCount;
	} else {
		return handleRandomPin();
	}
}

// generate pin button
function generatePin() {
	const generatePinBtn = document.getElementById('pinInput');
	generatePinBtn.value = handleRandomPin();
}

// submit digit button
const buttonInput = document.getElementById('buttonDigit').addEventListener('click', function (event) {
	// console.log(event.target.innerText);
	const btnNumber = event.target.innerText;

	if (isNaN(btnNumber)) {
		// handle backspace
		// handle clear
		console.log('not a number');
	} else {
		const typeInput = document.getElementById('digitShow');
		typeInput.value = typeInput.value + btnNumber;
	}
});
