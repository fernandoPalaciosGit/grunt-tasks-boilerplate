import {evens} from 'evens';
import {fives} from 'fives';

// Expression bodies
var odds = evens.map(v => v + 1),
		nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
	if (v % 5 === 0) {
		fives.push(v);
	}
});

// Lexical this
var bob = {
	name: 'Bob',
	friends: [],
	printFriends () {
		this.friends.forEach(f => {
			return this.name + ' knows ' + f;
		});
	}
};

export {odds} from 'odds';
export {bob} from 'bob';
