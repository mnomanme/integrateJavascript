// 21_5-3 When and how to use arguments in a function
function getFullName(firstName, lastName) {
	// console.log(arguments);
	let fullName = '';
	for (let i = 0; i < arguments.length; i++) {
		const nameElement = arguments[i];
		fullName = fullName + ' ' + nameElement;
	}
	return fullName;
}

const name = getFullName('Omuk', 'Songket', 'Bin', 'Hanif', 'Songket');
console.log(name);
