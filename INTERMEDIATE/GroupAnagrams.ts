/*
49. Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Input: strs = [""]
Output: [[""]]
Input: strs = ["a"]
Output: [["a"]]
*/

function groupAnagrams(strs: string[]): string[][] {
	if (strs.length === 0) {
		return [];
	}
	const map = new Map<string, string[]>();
	let chars = Array(26).fill(0);
	for (const str of strs) {
		for (const letter of str) {
			chars[letter.charCodeAt(0) - 97]++;
		}
		const key = chars.join('-');
		chars = Array(26).fill(0);
		if (map.has(key)) {
			map.get(key).push(str);
		} else {
			map.set(key, [str]);
		}
	}
	// for (const arr of map.values()) {
	// 	result.push(arr);
	// }
	// map.forEach((value, key) => {
	// 	result.push(value);
	// });
	// return result;
	return Array.from(map.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));