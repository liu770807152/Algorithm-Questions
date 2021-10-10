/*
844. Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

function backspaceCompare(s: string, t: string): boolean {
	function removeSpace(s: string): string {
		const stack = [];
		for (const c of s) {
			if (c !== '#') {
				stack.push(c);
			} else {
				if (stack.length) {
					stack.pop();
				}
			}
		}
		return stack.join('');
	}
	return removeSpace(s) === removeSpace(t);
};