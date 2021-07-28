// third solution
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

// second solution
// phone increament
document.getElementById('phone-increament').addEventListener('click', function () {
	handlePhoneChange(true);
});

// phone decreament
document.getElementById('phone-decreament').addEventListener('click', function () {
	handlePhoneChange(false);
});
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

// case increament
document.getElementById('case-increament').addEventListener('click', function () {
	handleCaseChange(true);
});

// case decreament
document.getElementById('case-decreament').addEventListener('click', function () {
	handleCaseChange(false);
});

//function
function handleCaseChange(isIncrease) {
	const caseOutput = document.getElementById('case-count');
	const caseCount = parseInt(caseOutput.value);

	// const caseNewOutput = caseCount - 1;
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

// first solution
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

// case increament
document.getElementById('case-increament').addEventListener('click', function () {
	// console.log('case increase');
	const caseInput = document.getElementById('case-count');
	const caseCount = parseInt(caseInput.value);
	// console.log(caseCount);
	const caseNewCount = caseCount + 1;
	caseInput.value = caseNewCount;

	const caseTotal = caseNewCount * 60;
	document.getElementById('case-price').innerText = caseTotal;
});

// case decreament
document.getElementById('case-decreament').addEventListener('click', function () {
	// console.log('case-decreament');
	const caseOutput = document.getElementById('case-count');
	const caseCount = parseInt(caseOutput.value);
	// console.log(caseCount);
	const caseNewOutput = caseCount - 1;
	caseOutput.value = caseNewOutput;

	const caseTotal = caseNewOutput * 60;
	document.getElementById('case-price').innerText = caseTotal;
});
