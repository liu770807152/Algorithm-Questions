/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [[1,3],[2,3]]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
*/

// make a max heap and get the top K numbers
class MaxHeap {
  list: number[][];
  compare: Function;
  constructor(list: number[][] = [], compare: Function = (a, b) => a - b) {
    this.list = [];
    this.compare = compare;
    list.forEach((e) => this.push(e));
  }
  get size() {
    return this.list.length;
  }
  get top() {
    return this.list[0];
  }
  push(e) {
    this.list.push(e);
    this.shiftUp();
  }
  pop() {
    if (this.size <= 0) return 'no element';
    const front = this.list.shift();
    if (this.size >= 1) {
      this.list.unshift(this.list.pop());
      this.shiftDown();
    }
    return front;
  }
  shiftUp() {
    let i = this.size - 1;
    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2);
      if (this.compare(this.list[i], this.list[parentIndex]) > 0) {
        this.swap(i, parentIndex);
        i = parentIndex;
      } else {
        break;
      }
    }
  }
  shiftDown() {
    let i = 0;
    while (i < this.size - 1) {
      let findIndex = 1;
      const subLeftIndex = 2 * i + 1,
        subRightIndex = 2 * i + 2;
      // find the bigger index from father and his left children
      if (
        this.list[findIndex] &&
        this.list[subLeftIndex] &&
        this.compare(this.list[findIndex], this.list[subLeftIndex]) < 0
      ) {
        findIndex = subLeftIndex;
      }
      // find the biggest index from 3 nodes
      if (
        this.list[findIndex] &&
        this.list[subRightIndex] &&
        this.compare(this.list[findIndex], this.list[subRightIndex]) < 0
      ) {
        findIndex = subRightIndex;
      }
      // if the biggest index is not i, swap
      if (i !== findIndex) {
        this.swap(i, findIndex);
        i = findIndex;
      } else {
        break;
      }
    }
  }
  swap(index1, index2) {
    const temp = this.list[index1];
    this.list[index1] = this.list[index2];
    this.list[index2] = temp;
  }
}

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const compare: Function = (a, b) => a[0] + a[1] - b[0] - b[1];
  const heap = new MaxHeap([], compare);
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const item = [n1, n2];
      // straight into heap when the amount is lower than K
      if (heap.size < k) {
        heap.push(item);
        continue;
      }
      if (compare(heap.top, item) > 0) {
        heap.pop();
        heap.push(item);
      } else {
        break;
      }
    }
  }
  return heap.list;
}

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
