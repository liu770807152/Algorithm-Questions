/*
242.Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true
Input: s = "rat", t = "car"
Output: false
*/

function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	const map = new Map();
	let result = true;
	for (const char of s) {
		if (map.has(char)) {
			map.set(char, map.get(char) + 1);
		} else {
			map.set(char, 1);
		}
	}
	
	for (const char of t) {
		if (map.has(char)) {
			map.set(char, map.get(char) - 1);
		} else {
			return false;
		}
	}
	map.forEach((value, key) => {
		if (value !== 0) result = false;
	});
	return result;
};

console.log(isAnagram('anagram', 'nagaram'));