// 18-3 Callback function and pass different function

function explain_callback(name, age, task) {
	task();
	console.log('Your name is :', name);
	console.log('Your age is :', age);
	// washHand();
	// takeShower();
	// console.log(task);
	// console.log('Your task is', task());
}

function washHand() {
	console.log('Wash your hand');
}

function takeShower() {
	console.log('Take your shower');
}

function scrollFacebook() {
	console.log('Scroll facebook but dont like any post');
}

explain_callback('Mohmmad Noman', 24, washHand); // passing function name
explain_callback('Mohammad Sakib', 21, takeShower); // passing function name
explain_callback('Mohammad Nayeem', 19, scrollFacebook); // passing function name
