/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

function isPalindrome(s: string): boolean {
	// /[^a-z0-9]/gi 也可以
	const str = s.toLowerCase().replace(/[\W_]/g, '');
	/** 多语言通用方法 */
	// if (str.length < 2) {
	// 	return true;
	// }
	// let left = 0, right = str.length - 1;
	// while (left < right) {
	// 	if (str[left] !== str[right]) {
	// 		return false;
	// 	}
	// 	left++;
	// 	right--;
	// }
	// return true;
	/** JS ES6特有方法 */
  // return str.length < 2 || str === [...str].reverse().join('');
	return str.length < 2 || str === Array.from(str).reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));