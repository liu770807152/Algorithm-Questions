/*
21. Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
Input: l1 = [], l2 = []
Output: []
Input: l1 = [], l2 = [0]
Output: [0]
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
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

function mergeTwoLists(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	if (l1 === null && l2 === null) {
		return null;
	}
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	let dummy = new ListNode(null, null),
		cur = dummy;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			cur.next = new ListNode(l1.val, null);
			cur = cur.next;
			l1 = l1.next;
		} else {
			cur.next = new ListNode(l2.val, null);
			cur = cur.next;
			l2 = l2.next;
		}
	}
	if (l1) cur.next = l1;
	else if (l2) cur.next = l2;
	return dummy.next;
}
