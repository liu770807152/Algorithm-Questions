/*
20. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.

Input: s = "()"
Output: true
Input: s = "()[]{}"
Output: true
Input: s = "([)]"
Output: false
Input: s = "{[]}"
Output: true
*/

function isValid(s: string): boolean {
	const pMap = {
			')': '(',
			']': '[',
			'}': '{',
	}, stack = [];
	let length = -1;
	for (const cur of s) {
			if (length !== -1 && pMap[cur] === stack[length]) {
					stack.splice(length, 1);
					length--;
			} else {
					stack.push(cur);
					length++;
			}
	}
	return stack.length === 0;
};