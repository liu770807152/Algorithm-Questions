/*
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Input: head = [5], left = 1, right = 1
Output: [5]
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
/**  */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	if (!head || !head.next || left === right) {
		return head;
	}
	let prev = null, curr = head, next = head;
	// left & right 从1开始
	for (let i = 1; i < left; i++) {
		prev = curr;
		curr = curr.next;
	}
	let prevGuard = prev, currGuard = curr;
	/** 第一种反转方法：原地反转 */
	for (let i = left; i <= right; i++) {
		// next = curr.next;
		// curr.next = prev;
		// prev = curr;
		// curr = next;
		[curr.next, prev, curr] = [prev, curr, curr.next];
	}
	/** 第二种反转方法：头插法 */
	// let dummy = new ListNode(null, null);
	// for (let i = left; i <= right; i++) {
	// 	next = curr.next;
	// 	curr.next = dummy.next;
	// 	dummy.next = curr;
	// 	curr = next;
	// }
	/** 第三种反转方法：递归 */
	// function reverse(start: ListNode, time: number): ListNode {
	// 	if (!time) {
	// 		return start;
	// 	}
	// 	let newStart = reverse(start.next, time--);
	// 	start.next.next = start;
	// 	start.next = null;
	// 	return newStart;
	// }
	// if (prevGuard) {
	// 	// left > 1
	// 	prevGuard.next = reverse(curr, right - left + 1);
	// } else {
	// 	head = reverse(curr, right - left + 1);
	// }

	if (prevGuard) {
		// left > 1
		prevGuard.next = prev;
	} else {
		head = prev;
	}
	currGuard.next = next;
	return head;
};