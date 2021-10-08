/*
445.You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Follow up: Could you solve it without reversing the input lists?

Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
Input: l1 = [0], l2 = [0]
Output: [0]
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/** 用栈来做 + 头插法, 别忘了进位1 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const stack1 = [], stack2 = [];
	let carry = 0, sum = 0, curr = null;
	while (l1) {
		stack1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		stack2.push(l2.val);
		l2 = l2.next;
	}
	while (stack1.length || stack2.length) {
		if (stack1.length) {
			sum += stack1.pop();
		}
		if (stack2.length) {
			sum += stack2.pop();
		}
		// 头插法
		const node = new ListNode((sum + carry) % 10, curr);
		curr = node;
		carry = Math.floor((sum + carry) / 10);
		sum = 0;
	}
	if (carry === 1) {
		const node = new ListNode(1, curr);
		curr = node;
	}
	return curr;
};