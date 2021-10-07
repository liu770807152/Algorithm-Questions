/*
187.The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. 
You may return the answer in any order.

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
*/

function findRepeatedDnaSequences(s: string): string[] {
	let index = 0, subStr = '';
	const set: Set<string> = new Set(), resultSet: Set<string> = new Set();
	while (index + 10 <= s.length) {
		subStr = s.substr(index, 10);
		if (!set.has(subStr)) {
			set.add(subStr);
		} else {
			resultSet.add(subStr);
		}
		index++;
	}
	return Array.from(resultSet);
};