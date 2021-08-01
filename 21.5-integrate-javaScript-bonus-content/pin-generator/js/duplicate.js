// success & danger sign
document.getElementById('successSign').style.display = 'none';
document.getElementById('dangerSign').style.display = 'none';

function handleRandomPin() {
	const randomPin = Math.random() * 10000;
	const pinCount = (randomPin + '').split('.')[0];

	if (pinCount.length === 4) {
		return pinCount;
	} else {
		// console.log('handlepin', pinCount);
		return handleRandomPin();
	}
}

// generate pin
function generatePin() {
	const generatePinBtn = document.getElementById('pinInput');
	generatePinBtn.value = handleRandomPin();
}

// document.getElementById('pinGenerateBtn').addEventListener('click', function () {
// 	const generatePinBtn = document.getElementById('pinInput');
// 	generatePinBtn.value = handleRandomPin();
// });

// submit digit button
// using event bubble to access digit button number
const buttonInput = document.getElementById('buttonDigit').addEventListener('click', function (event) {
	// console.log(event.target.innerText);
	const btnNumber = event.target.innerText;

	if (isNaN(btnNumber)) {
		// handle backspace
		// handle clear
		console.log('not a number');
	} else {
		// console.log(btnNumber);
		const typeInput = document.getElementById('digitShow');
		typeInput.value = typeInput.value + btnNumber;
	}
});

// submit button matching
const submitVerify = document.getElementById('submit').addEventListener('click', function () {
	const generatePin = document.getElementById('pinInput').value;
	const typePin = document.getElementById('digitShow').value;

	if (generatePin === typePin) {
		const success = document.getElementById('successSign');
		success.style.display = 'block';
		const incorrect = document.getElementById('dangerSign');
		incorrect.style.display = 'none';
	} else {
		const incorrect = document.getElementById('dangerSign');
		incorrect.style.display = 'block';
		const success = document.getElementById('successSign');
		success.style.display = 'none';
	}
});
