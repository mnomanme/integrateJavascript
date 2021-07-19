// warning duplicate code is here

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
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
	const amountNumber = getInputNumber('depositAmount');
	/*
	const depositAmount = document.getElementById('depositAmount').value;
	const amountNumber = parseFloat(depositAmount);
	const currentDeposit = document.getElementById('currentDeposit').innerText;
	const currentDepositNumber = parseFloat(currentDeposit);
	const totalDeposit = currentDepositNumber + depositNumber;
	document.getElementById('currentDeposit').innerText = totalDeposit;

	const currentBalance = document.getElementById('currentBalance').innerText;
	const currentBalanceNumber = parseFloat(currentBalance);
	const totalBalance = depositNumber + currentBalanceNumber;
	document.getElementById('currentBalance').innerText = totalBalance;
	**/

	if (amountNumber < 0) {
		alert('Please Enter Valid Amount!');
	} else {
		updateSpanText('currentDeposit', amountNumber);
		updateSpanText('currentBalance', amountNumber);

		document.getElementById('depositAmount').value = '';
	}
});

// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
	const withdrawAmountNumber = getInputNumber('withdrawAmount');
	// const withdrawAmount = document.getElementById('withdrawAmount').value;
	// const withdrawAmountNumber = parseFloat(withdrawAmount);
	if (withdrawAmountNumber < 0) {
		alert('Pleaser Enter Valid Withdraw Amount!');
	} else {
		updateSpanText('currentWithdraw', withdrawAmountNumber);
		updateSpanText('currentBalance', -1 * withdrawAmountNumber);

		document.getElementById('withdrawAmount').value = '';
	}
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
