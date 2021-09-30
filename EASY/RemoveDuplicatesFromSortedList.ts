/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Input: head = [1,1,2]
Output: [1,2]
Input: head = [1,1,2,3,3]
Output: [1,2,3]
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
/** 从第一个开始删除，只要删除了就不往下走，继续看下一个数要不要删除；否则走到下一个数，重复上述过程。 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return head;
	}
	let cur = head;
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next;
			continue;
		}
		cur = cur.next;
	}
	return head;
};
