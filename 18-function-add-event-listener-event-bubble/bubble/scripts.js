document
	.getElementById('first-item')
	.addEventListener('click', function (event) {
		console.log('first item clicked');
		event.stopPropagation();
	});

document.getElementById('my-list').addEventListener('click', function (event) {
	console.log('my list clicked');
	// event.stopImmediatePropagation();
});

document
	.getElementById('container')
	.addEventListener('click', function (event) {
		console.log('container clicked');
	});
