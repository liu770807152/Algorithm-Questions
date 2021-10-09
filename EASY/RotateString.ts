/*
796. Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.

Input: s = "abcde", goal = "cdeab"
Output: true
Input: s = "abcde", goal = "abced"
Output: false
*/
/** 解法一：真的旋转 */
function rotateString(s: string, goal: string): boolean {
	let curr = s;
	for (let i = 0; i < s.length - 1; i++) {
		curr = curr.substring(1) + curr[0];
		if (curr === goal) {
			return true;
		}
	}
	return false;
};

/** 解法二：把字符串扩充为两倍长，如 abc -> abcabc，然后用滑动窗口比较即可 */
function rotateString2(s: string, goal: string): boolean {
	const allStr = s + s;
	for (let i = 0; i < s.length; i++) {
		if (allStr.substr(i, s.length) === goal) {
			return true;
		}
	}
	return false;
};

console.log(rotateString2('abcde', 'cdeab'));