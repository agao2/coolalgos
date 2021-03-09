/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const letterCombinations = (digits) => {
	const map = {
		'2': ['a', 'b', 'c'],
		'3': ['d', 'e', 'f'],
		'4': ['g', 'h', 'i'],
		'5': ['j', 'k', 'l'],
		'6': ['m', 'n', 'o'],
		'7': ['p', 'q', 'r', 's'],
		'8': ['t', 'u', 'v'],
		'9': ['w', 'x', 'y', 'z'],
	}

	let ans = [];

	// recursive solution (DFS) on recursion tree
	const recurse = (digits, combination) => {
		if (digits.length === 0) {
			return;
		}

		if (combination.length == digits.length) {
			ans.push(combination);
			return;
		}

		const digit = digits[combination.length];
		const characters = map[digit];

		for (let character of characters) {
			recurse(digits, combination + character)
		}
	}

	// iterative solution (BFS) on recursion tree
	const iterate = (digits) => {
		if (digits.length === 0) {
			return;
		}

		let queue = [];
		const characters = map[digits[0]];
		queue.push(...characters)

		while (queue.length > 0) {
			let substring = queue.shift();
			if (substring.length == digits.length) {
				ans.push(substring);
			}
			else {
				const digit = digits[substring.length];
				const children = map[digit];
				for (let child of children) {
					queue.push(substring + child);
				}
			}
		}
	}

	// recurse(digits.split(''), [])
	iterate(digits.split(''));

	return ans;
}


console.log(letterCombinations('232'));




