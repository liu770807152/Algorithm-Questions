/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. 
Note that pos is not passed as a parameter.
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
/** 运用弗洛伊德算法得到环的起始位置：当快慢指针相遇时，将快指针挪回起点，每次只走一步。最后快慢指针的相遇点就是环的起点。
 *  为什么弗洛伊德算法是正确的？
 *  答：设环的长度是d，起点到环起点的距离是l。快指针入环，知道慢指针走到环的起点，慢指针走了l步，而快指针走了2*l步，因此快指针领先慢指针l步。
 *  那么快指针要追赶慢指针的距离是d-l步。当快指针和慢指针相遇时，慢指针走了d-l步，此时它距离环的起点的距离是d-(d-l)=l。
 *  所以我们把快指针放到head，调整速度也为1步的话，head距离环的起点为l步，最终二者会在环的起点相遇。 */
function detectCycle(head: ListNode | null): ListNode | null {
	if (!head) return null;
	let quick = head, slow = head;
	while (quick?.next?.next) {
		quick = quick.next.next;
		slow = slow.next;
		if (quick === slow) {
			quick = head;
			while (quick !== slow) {
				quick = quick.next;
				slow = slow.next;
			}
			return quick;
		}
	}
	return null;
};
