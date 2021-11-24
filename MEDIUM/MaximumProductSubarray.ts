/*
152.Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
It is guaranteed that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
/** 依旧是动态规划，类似于53，但是要同时保留当前的最大值和最小值，因为负负可以得正。 */
function maxProduct(nums: number[]): number {
	if (!nums || !nums.length) return 0;
	const maxProductMemo: number[] = [nums[0]];
	const minProductMemo: number[] = [nums[0]];
	let max = nums[0];
	for (let i = 1; i < nums.length; i++) {
		maxProductMemo[i] = Math.max(nums[i], nums[i] * maxProductMemo[i-1], nums[i] * minProductMemo[i-1]);
		minProductMemo[i] = Math.min(nums[i], nums[i] * minProductMemo[i-1], nums[i] * maxProductMemo[i-1]);
		max = Math.max(max, maxProductMemo[i]);
	}
	return max;
};