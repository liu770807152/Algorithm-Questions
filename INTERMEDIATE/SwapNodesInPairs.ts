/*
24. Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)
*/

/**
 * 交换两节点，分6步走:
 * 1. n1 = cur.next;
 * 2. n2 = cur.next.next;
 * 3. cur.next = n2;
 * 4. n1.next = n2.next;
 * 5. n2.next = n1;
 * 6. cur = n1;
 * 2为p时，2->3->4 变为 2->4->3
 */

function swapPairs(head: ListNode | null): ListNode | null {
	let cur = new ListNode(null, head),
		dummy = cur,
		n1 = null,
		n2 = null;
	while (cur && cur.next && cur.next.next) {
		n1 = cur.next;
		n2 = cur.next.next;
		cur.next = n2;
		n1.next = n2.next;
		n2.next = n1;
		cur = n1;
	}
	return dummy.next;
}
