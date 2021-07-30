// 21_5-4 When and how to use javascript call back function
function welcomeGuest(name, getHandler) {
	// console.log(name);
	getHandler(name);
}
const actorName = 'Tom Hanks';

function greetMoring(name) {
	console.log('Good Morning', name);
}
function greetAfternoon(name) {
	console.log('Good After Noon', name);
}

welcomeGuest(actorName, greetMoring);
welcomeGuest('Tamim Iqbal', greetAfternoon);
