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
	// console.log('deposit button works now');
	const amountNumber = getInputNumber('depositAmount');

	if (amountNumber < 0) {
		alert('Please Enter Valid Amount!');
	} else {
		updateSpanText('currentDeposit', amountNumber);
		updateSpanText('currentBalance', amountNumber);
	}
	document.getElementById('depositAmount').value = '';
});

// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
	// console.log('withdraw button works now');
	const withdrawAmountNumber = getInputNumber('withdrawAmount');

	if (withdrawAmountNumber < 0) {
		alert('Pleaser Enter Valid Withdraw Amount!');
	} else {
		updateSpanText('currentWithdraw', withdrawAmountNumber);
		updateSpanText('currentBalance', -1 * withdrawAmountNumber);
	}

	document.getElementById('withdrawAmount').value = '';
});

// input amount number
function getInputNumber(id) {
	const inputAmount = document.getElementById(id).value;
	const inputAmountNumber = parseFloat(inputAmount);

	return inputAmountNumber;
}
// update amount number
function updateSpanText(id, amountNumber) {
	const currentAmount = document.getElementById(id).innerText;
	const currentAmountNumber = parseFloat(currentAmount);
	const totalAmount = amountNumber + currentAmountNumber;

	document.getElementById(id).innerText = totalAmount;
}
