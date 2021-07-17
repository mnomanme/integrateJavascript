function handleClicked() {
	console.log('Someone Clicked Me');
	document.body.style.backgroundColor = 'lightgreen';
}

// second button
const secondButton = document.getElementById('second');
secondButton.onclick = function secondClick() {
	console.log('Second person press me');
};

// third button
const thirdButton = document.getElementById('third');
thirdButton.addEventListener('click', handleClicked);
thirdButton.onclick = handleClicked;

// first button
document.getElementById('first').addEventListener('click', function () {
	document.body.style.color = 'crimson';
});
