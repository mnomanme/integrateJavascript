function handleProductChange(isIncrease) {
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

// phone increament
document.getElementById('phone-increament').addEventListener('click', function () {
	// console.log('phone increase');
	const phoneInput = document.getElementById('phone-count');
	// console.log(typeof phoneInput.value);
	const phoneCount = parseInt(phoneInput.value);
	// console.log(phoneCount);
	const phoneNewCount = phoneCount + 1;
	phoneInput.value = phoneNewCount;

	const phoneTotal = phoneNewCount * 1200;
	document.getElementById('phone-price').innerText = phoneTotal;
});

// phone decreament
document.getElementById('phone-decreament').addEventListener('click', function () {
	// console.log('phone decrease');
	const phoneInput = document.getElementById('phone-count');
	// console.log(typeof phoneInput.value);
	const phoneCount = parseInt(phoneInput.value);
	// console.log(typeof phoneCount);
	const phoneNewCount = phoneCount - 1;
	phoneInput.value = phoneNewCount;

	const phoneTotal = phoneNewCount * 1200;
	document.getElementById('phone-price').innerText = phoneTotal;
});
