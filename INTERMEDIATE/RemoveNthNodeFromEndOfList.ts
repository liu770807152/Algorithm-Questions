/**
 * 19. Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * Input: head = [1], n = 1
 * Output: []
 * Definition for singly-linked list.
 */
/** 两个指针，前面是dummy，后面是第N个节点，然后双管齐下，最后删除dummy.next */
class ListNode {
	next: ListNode | null;
	val: number;
	constructor(val, next) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head: ListNode, n: number) {
	let front = new ListNode(0, head), end = head;
	while (n) {
			end = end?.next;
			n--;
	}
	while(end) {
			front = front.next;
			end = end.next;
	}
	if (front.next !== head) front.next = front.next.next;
	else head = head.next;
	return head;
};
