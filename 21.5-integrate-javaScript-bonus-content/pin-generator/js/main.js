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
	const btnNumber = event.target.innerText;

	if (isNaN(btnNumber)) {
		// handle clear
		if (btnNumber === 'C') {
			const typeInput = document.getElementById('digitShow');
			typeInput.value = '';
		}
		// handle backspace
		if (btnNumber === 'B') {
			const typeInput = document.getElementById('digitShow');
			typeInput.value = typeInput.value.slice(0, -1);
		}
	} else {
		const typeInput = document.getElementById('digitShow');
		typeInput.value = typeInput.value + btnNumber;
	}
});

// submit button matching
const submitVerify = document.getElementById('submit').addEventListener('click', function () {
	const generatePin = document.getElementById('pinInput').value;
	const typePin = document.getElementById('digitShow').value;

	if (generatePin === '') {
		alert('Please Generate Your Pin First!');
	}
	if (generatePin != '' && typePin === '') {
		alert('Please Type Your 4 Digit Code');
	}
	if (generatePin === typePin) {
		matchingResult('block', 'none');
		document.getElementById('pinInput').value = '';
		document.getElementById('digitShow').value = '';
	} else {
		matchingResult('none', 'block');
		document.getElementById('digitShow').value = '';
	}
});

// matching result
function matchingResult(correctSign, incorrectSign) {
	const success = document.getElementById('successSign');
	success.style.display = correctSign;
	const incorrect = document.getElementById('dangerSign');
	incorrect.style.display = incorrectSign;
}

// submit try left
