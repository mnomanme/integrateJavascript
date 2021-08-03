// success & danger sign
document.getElementById('successSign').style.display = 'none';
document.getElementById('dangerSign').style.display = 'none';

// generate random pin number
function handleRandomPin() {
	const randomPin = Math.random() * 1000000;
	const pinCount = (randomPin + '').split('.')[0];

	if (pinCount.length === 6) {
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
	if (generatePin !== '' && typePin === '') {
		alert('Please Type Your 4 Digit Code');
	}

	if (generatePin === typePin && generatePin !== '' && typePin !== '') {
		matchingResult('block', 'none');
		document.getElementById('pinInput').value = '';
		document.getElementById('digitShow').value = '';
	} else {
		matchingResult('none', 'block');
		document.getElementById('digitShow').value = '';
		alert('Youn Cannot Submit Empty Box!');
	}
});

// matching result
function matchingResult(correctSign, incorrectSign) {
	const success = document.getElementById('successSign');
	success.style.display = correctSign;
	const incorrect = document.getElementById('dangerSign');
	incorrect.style.display = incorrectSign;

	tryLeft();
}

// submit try left
function tryLeft() {
	const tryLeftInput = parseInt(document.getElementById('tryLeft').innerText);
	const tryLeftCount = (document.getElementById('tryLeft').innerText = tryLeftInput - 1);
	console.log('ss', typeof tryLeftCount);
	if (tryLeftCount <= 0) {
		document.getElementById('tryLeft').innerText = 0;
		document.getElementById('submit').style.display = 'none';
		document.getElementById('pinInput').value = '';
	}
}
