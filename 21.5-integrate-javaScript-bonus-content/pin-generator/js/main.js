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

// submit field input digit button
const buttonInput = document.getElementById('buttonDigit').addEventListener('click', function (event) {
	// console.log(event.target.innerText);
	const btnNumber = event.target.innerText;

	if (isNaN(btnNumber)) {
		// handle clear
		if (btnNumber === 'C') {
			const typeInput = document.getElementById('digitShow');
			typeInput.value = '';
		}
		// handle backspace
		// if (btnNumber === 'B') {
		// 	const typeInput = document.getElementById('digitShow');
		// 	typeInput.value = btnNumber - typeInput.value;
		// }
		console.log('not a number');
	} else {
		const typeInput = document.getElementById('digitShow');
		typeInput.value = typeInput.value + btnNumber;
	}
});

// submit button matching
const submitVerify = document.getElementById('submit').addEventListener('click', function () {
	const generatePin = document.getElementById('pinInput').value;
	const typePin = document.getElementById('digitShow').value;

	if (generatePin === typePin) {
		matchingResult('block', 'none');
	} else {
		matchingResult('none', 'block');
	}
});

// matching result
function matchingResult(correctSign, incorrectSign) {
	const success = document.getElementById('successSign');
	success.style.display = correctSign;
	const incorrect = document.getElementById('dangerSign');
	incorrect.style.display = incorrectSign;
}
