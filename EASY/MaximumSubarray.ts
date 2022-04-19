/*
53.Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Input: nums = [1]
Output: 1
*/
/** 遍历各元素，判断当前元素+存储的最大值大，还是存储的最大值大：如果当前元素+存储的最大值大，更新最大值；如果当前元素更大，最大值更新为当前元素 */
// 换言之，当前存储的最大值不要是负的，如果是，应该赶紧舍弃
function maxSubArray(nums: number[]): number {
	let max = -Infinity, sumOfArr = 0;
	for (const num of nums) {
		if (sumOfArr + num >= num) {
			sumOfArr += num;
			max = Math.max(sumOfArr, max);
		} else {
			sumOfArr = num;
			max = Math.max(max, num);
		}
	}
	return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([1,2]));