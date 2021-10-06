/*
153.Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/
/** O(N)解法：Math.min(...nums)
 *  O(Nlg(N))解法：二分搜索，找到后一个数比前一个数小的位置！
 *  先检查一下末尾是不是小于开头，排除没有翻转的情况。如果没有翻转，返回开头。
 *  开始二分搜索，看看mid的左边是否比mid大，或者mid右边比mid小。如果是，返回mid或mid+1。
 *  如果不是，看看往左走还是往右走：如果left小于mid，左半边是递增数组，就砍掉左半边，把left调整为mid+1；否则把right调整为mid-1
 */
function findMin(nums: number[]): number {
	if (nums[0] < nums[nums.length-1]) return nums[0];
	if (nums.length === 1) return nums[0];
	let mid: number = Math.floor(nums.length / 2), left: number = 0, right: number = nums.length - 1;
	while (left < right) {
		// 根据目标找到了
		if (nums[mid-1] > nums[mid]) return nums[mid];
		else if (nums[mid+1] < nums[mid]) return nums[mid+1];
		// 没找到，更新left或right和mid
		if (nums[left] < nums[mid]) left = mid + 1;
		else right = mid - 1;
		mid = left + Math.floor((right - left) / 2);
	}
};

console.log(findMin([5,1,2,3,4]));