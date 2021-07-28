// case increase & decrease
function handleCaseChange(isIncrease) {
	const caseOutput = document.getElementById('case-count');
	const caseCount = parseInt(caseOutput.value);

	let caseNewCount = caseCount;

	if (isIncrease === true) {
		caseNewCount = caseCount + 1;
	}
	if (isIncrease === false && caseNewCount > 0) {
		caseNewCount = caseCount - 1;
	}

	caseOutput.value = caseNewCount;
	const caseTotal = caseNewCount * 60;
	document.getElementById('case-price').innerText = caseTotal;
}
// phone increament & decreament

function handlePhoneChange(isIncrease) {
	const phoneInput = document.getElementById('phone-count');
	const phoneCount = parseInt(phoneInput.value);

	let phoneNewCount = phoneCount;
	if (isIncrease === true) {
		phoneNewCount = phoneCount + 1;
	}
	if (isIncrease === false && phoneNewCount > 0) {
		phoneNewCount = phoneCount - 1;
	}

	phoneInput.value = phoneNewCount;
	const phoneTotal = phoneNewCount * 1200;
	document.getElementById('phone-price').innerText = phoneTotal;
}
