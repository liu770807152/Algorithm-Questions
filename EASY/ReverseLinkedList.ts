/*
206.Given the head of a singly linked list, reverse the list, and return the reversed list.
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
/** 三种方法：原地反转；头插法；递归，其中原地反转最简单 */
function reverseList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;
	let prev = null, curr = head;
	while (curr) {
		[curr.next, prev, curr] = [prev, curr, curr.next];
	}
	return prev;
};