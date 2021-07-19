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
	// console.log('deposit clicked');
	const depositAmount = document.getElementById('depositAmount').value;
	const amountNumber = parseFloat(depositAmount);
	// console.log(depositNumber);

	/*
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

function updateSpanText(id, amountNumber) {
	const currentAmount = document.getElementById(id).innerText;
	const currentAmountNumber = parseFloat(currentAmount);
	const totalAmount = amountNumber + currentAmountNumber;
	document.getElementById(id).innerText = totalAmount;
}
