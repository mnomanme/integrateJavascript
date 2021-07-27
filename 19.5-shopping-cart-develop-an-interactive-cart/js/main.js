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
