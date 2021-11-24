/*
3. Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/** 双指针法，建立一个Set。遍历时，如果Set中已存在就front+1，否则end+1，更新最大距离。 */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s: string): number {
	const letterSet = new Set();
	let front = 0, end = 0, max = 0;
	while (end < s.length) {
			if (!letterSet.has(s.charAt(end))) {
					letterSet.add(s.charAt(end));
					end += 1;
					max = Math.max(max, end - front);
			} else {
					letterSet.delete(s.charAt(front));
					front += 1;
			}
	}
	return max;
};