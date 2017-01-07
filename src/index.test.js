var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
	describe('API all', function() {

		it('should work!', function() {
			expect(true).to.be.true; //
		});

		it('should be an array of strings', function(){

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
			expect(starWars.all).to.satisfy(isArrayOfStrings);
		});

		it('should contain Alex', function(){
			expect(starWars.all).to.include('Alex')
		});
	});
	describe('random', function() {
		it('sould return a random item from the starWars.all', function() {
			var randomItem = starWars.random();
			expect(starWars.all).to.include(randomItem);
		});

		it('should return an array of random items', function(){
			var randomItems = starWars.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item) {
				expect(starWars.all).to.include(item);
			});
		});
	});
});