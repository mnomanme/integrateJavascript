function handleProductChange(product, productAdd) {
	const productInput = document.getElementById(product + '-count');
	const productCount = parseInt(productInput.value);

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
}
