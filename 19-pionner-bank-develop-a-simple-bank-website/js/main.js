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
	const depositNumber = parseFloat(depositAmount);
	console.log(depositNumber);
});
