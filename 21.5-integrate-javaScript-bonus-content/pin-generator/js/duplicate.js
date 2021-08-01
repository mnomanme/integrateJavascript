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
