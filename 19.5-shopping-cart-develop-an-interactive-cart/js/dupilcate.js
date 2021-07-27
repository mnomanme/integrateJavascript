// second solution
// case increament
document.getElementById('case-increament').addEventListener('click', function () {
	handleProductChange(true);
});

// case decreament
document.getElementById('case-decreament').addEventListener('click', function () {
	handleProductChange(false);
});

function handleProductChange(isIncrease) {
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
