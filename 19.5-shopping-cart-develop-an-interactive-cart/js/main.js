// product calculate
function handleProductChange(product, productAdd) {
	const productInput = document.getElementById(product + '-count');
	const productCount = getInputValue(product);

	let productNewCount = productCount;
	if (productAdd === true) {
		productNewCount = productCount + 1;
	}
	if (productAdd === false && productNewCount > 0) {
		productNewCount = productCount - 1;
	}
	productInput.value = productNewCount;

	let productTotal = 0;
	if (product === 'phone') {
		productTotal = productNewCount * 1200;
	}
	if (product === 'case') {
		productTotal = productNewCount * 60;
	}
	document.getElementById(product + '-price').innerText = productTotal;
	// subtotal
	calculateTotal();
}

// calculate subtotal
function calculateTotal() {
	const phoneCount = getInputValue('phone');
	const caseCount = getInputValue('case');
	const subtotal = phoneCount * 1200 + caseCount * 60;
	document.getElementById('sub-total').innerText = subtotal;

	const tax = subtotal / 10;
	document.getElementById('tax').innerText = tax;

	const total = subtotal + tax;
	document.getElementById('total').innerText = total;
}

// calculate increament
function getInputValue(product) {
	const productInput = document.getElementById(product + '-count');
	const productCount = parseInt(productInput.value);

	return productCount;
}
