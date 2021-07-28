function handleProductChange(productAdd) {
	const productInput = document.getElementById('case-count');
	const productCount = parseInt(productInput.value);

	let productNewCount = productCount;

	if (productAdd === true) {
		productNewCount = productCount + 1;
	}
	if (productAdd === false && productNewCount > 0) {
		productNewCount = productCount - 1;
	}

	productInput.value = productNewCount;
	const productTotal = productNewCount * 60;
	document.getElementById('case-price').innerText = productTotal;
}
