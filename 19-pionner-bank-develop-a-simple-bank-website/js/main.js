// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
	// console.log('login button works now');
	const loginArea = document.getElementById('login-area');
	loginArea.style.display = 'none';
	const transactionArea = document.getElementById('transaction-area');
	transactionArea.style.display = 'block';
});

// deposit button event handler
const deposit = document.getElementById('addDeposit');
deposit.addEventListener('click', function () {
	const amountNumber = getInputNumber('depositAmount');
	/*
	// console.log('deposit clicked');
	const depositAmount = document.getElementById('depositAmount').value;
	const amountNumber = parseFloat(depositAmount);
	// console.log(amountNumber);

	const currentDeposit = document.getElementById('currentDeposit').innerText;
	const currentDepositNumber = parseFloat(currentDeposit);
	const totalDeposit = currentDepositNumber + depositNumber;
	document.getElementById('currentDeposit').innerText = totalDeposit;
	
	const currentBalance = document.getElementById('currentBalance').innerText;
	const currentBalanceNumber = parseFloat(currentBalance);
	const totalBalance = depositNumber + currentBalanceNumber;
	document.getElementById('currentBalance').innerText = totalBalance;
	*/

	updateSpanText('currentDeposit', amountNumber);
	updateSpanText('currentBalance', amountNumber);

	document.getElementById('depositAmount').value = '';
});

// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
	/*
	const withdrawAmount = document.getElementById('withdrawAmount').value;
	const withdrawAmountNumber = parseFloat(withdrawAmount);
	const totalWithdraw = currentBalanceNumber + withdrawAmountNumber;
	document.getElementById('withdrawAmount').innerText = totalWithdraw;
	**/
	const withdrawAmountNumber = getInputNumber('withdrawAmount');
	console.log(withdrawAmountNumber);
});

function getInputNumber(id) {
	const inputAmount = document.getElementById(id).value;
	const inputAmountNumber = parseFloat(inputAmount);
	return inputAmountNumber;
}

function updateSpanText(id, amountNumber) {
	const currentAmount = document.getElementById(id).innerText;
	const currentAmountNumber = parseFloat(currentAmount);
	const totalAmount = amountNumber + currentAmountNumber;
	document.getElementById(id).innerText = totalAmount;
}
