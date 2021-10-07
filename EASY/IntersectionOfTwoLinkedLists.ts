/*
160.Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.
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
/** 用两个指针指向两个起点，然后一直next走到末尾，走到null的时候重新设置为指向另一个起点。这样如果有相交，两个指针在交换起点后会最终在交点相遇。 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	let n1 = headA, n2 = headB;
	// 如果有交点，在交点会相遇；如果无交点，都会走到null
	while (n1 !== n2) {
		if (!n1) {
			n1 = headB;
		} else {
			n1 = n1.next;
		}
		if (!n2) {
			n2 = headA;
		} else {
			n2 = n2.next;
		}
	}
	return n1;
};