// li first item
document.getElementById('first-item').addEventListener('click', function (event) {
	// console.log('first item clicked');
	event.stopPropagation();
});

// ul my list
document.getElementById('my-list').addEventListener('click', function (event) {
	// console.log('my list clicked');
	event.stopImmediatePropagation();
});

// container
document.getElementById('container').addEventListener('click', function (event) {
	// console.log('container clicked');
});

// button
var item = document.getElementsByClassName('item');

for (let i = 0; i < item.length; i++) {
	const items = item[i];
	// console.log(items);
	items.addEventListener('click', function (event) {
		event.target.parentNode.removeChild(event.target);
		// console.log(this);
		// console.log(event.target.innerText);
		// console.log(event.target.parentNode);
	});
}

document.getElementById('add-new').addEventListener('click', function (event) {
	var itemParent = document.getElementById('my-list');
	var newItem = document.createElement('li');
	newItem.innerHTML = 'brand new item';
	itemParent.appendChild(newItem);
});

document.getElementById('my-list').addEventListener('click', function (event) {
	// console.log(this, event.target);
	event.target.parentNode.removeChild(event.target);
});
