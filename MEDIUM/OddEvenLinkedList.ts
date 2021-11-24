/*
328.Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, 
and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
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
/** 双指针法：奇数指针指向next.next，然后奇数指针位置更新；偶数指针同理。最后把奇偶链表串起来，奇数链表的尾指向偶数链表的头，所以偶数链表的头需要备份。 */
function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;
	let odd = head, even = head.next, evenGuard = head.next;
	while (odd?.next?.next || even?.next?.next) {
		if (odd?.next?.next) {
			odd.next = odd.next.next;
			odd = odd.next;
		}
		if (even?.next?.next) {
			even.next = even.next.next;
			even = even.next;
		}
	}
	odd.next = evenGuard;
	even.next = null;
	return head;
};