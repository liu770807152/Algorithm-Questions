/*
9. Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Input: x = 121
Output: true
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
/** 要么字符串比对，要么数学运算出反转后的数字再比对 */
function isPalindromeNumber(x: number): boolean {
	if (x < 0) return false;
	const original = x.toString(), length = Math.floor(original.length / 2);
	for (let i = 0; i < length; i++) {
		if (original[i] !== original[original.length-1-i]) return false;
	}
	return true;
};

console.log(isPalindromeNumber(-121));