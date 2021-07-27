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
