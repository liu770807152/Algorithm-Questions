/*
680. Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Input: s = "aba"
Output: true
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Input: s = "abc"
Output: false
*/
/** 从头尾向中间靠拢，靠拢途中不停比较。如果发现不一样了，就查看left+1和right + left和right-1，通过了就标记已经删除了一个，并多更新一下left或right */
function validPalindrome(s: string): boolean {
	function isPalindrome(left: number, right: number) {
		while (left < right) {
			if (s[left++] !== s[right--]) {
				return false;
			}
		}
		return true;
	}
	let left = 0, right = s.length - 1, hasDeleted = false;
	while (left < right) {
		if (s[left] !== s[right] && !hasDeleted) {
			const result1 = isPalindrome(left + 1, right),
				result2 = isPalindrome(left, right - 1);
			if (!result1 && !result2) return false;
			else if (result1) { 
				left++;
				hasDeleted = true;
			}
			else {
				right--;
				hasDeleted = true;
			}
		}
		left++;
		right--;
	}
	return true;
};