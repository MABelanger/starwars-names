  /*
	npm install --save unique-random-array
*/
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');




// Expose the public API
module.exports = {
	all: starWarsNames,
	random: uniqueRandomArray(starWarsNames)
}