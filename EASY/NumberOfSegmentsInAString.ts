/*
434. You are given a string s, return the number of segments in the string. 
A segment is defined to be a contiguous sequence of non-space characters.

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Input: s = "Hello"
Output: 1
Input: s = "love live! mu'sic forever"
Output: 4
*/

function countSegments(s: string): number {
	let counter = 0, isWord = false;
	for (const char of s) {
		if (char !== ' ') {
			isWord = true;
		} else {
			if (isWord) {
				counter++;
				isWord = false;
			}
		}
	}
	if (isWord) counter++;
	return counter;
};

function countSegments2(s: string): number {
	let counter = 0, arr = s.split(' ');
	for (const str of arr) {
		if (str !== '') counter++;
	}
	return counter;
};

console.log(countSegments2('                '));