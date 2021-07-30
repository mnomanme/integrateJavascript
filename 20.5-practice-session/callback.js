// 21_5-4 When and how to use javascript call back function
function welComeGuest(name, wishHandler) {
	// console.log('Guest Name =>', name);
	// console.log('wish handler =>', wishHandler);
	// console.log('wish handler name =>', name);
	wishHandler(name);
}

const actorName = 'Tom Hanks';
// welComeGuest(actorName);

function greetMorning(wish) {
	console.log('Good Morning', wish);
}

function greetEvening(wish2) {
	console.log('Good Evening', wish2);
}

function greetNight(wish3) {
	console.log('Good Night', wish3);
}

welComeGuest(actorName, greetMorning);
welComeGuest('Tamim Iqbal', greetEvening);
welComeGuest('Shakib Khan', greetNight);

welComeGuest('Chirs Gayle', function (player) {
	console.log('Special Welcome', player);
});

function handleClicked() {
	console.log('someone clicked me');
}

// document.getElementById('click').addEventListener('click', handleClicked);
