// login button

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
	// console.log('login button works now');
	const loginArea = document.getElementById('login-area');
	loginArea.style.display = 'none';
	const transactionArea = document.getElementById('transaction-area');
	transactionArea.style.display = 'block';
});
