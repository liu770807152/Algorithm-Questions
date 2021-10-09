/*
905. Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Input: nums = [0]
Output: [0]
*/
/** 双指针法，一头一尾向中间靠拢。注意：有四种情况，其中两种是都为偶数/奇数的情况！ */
function sortArrayByParity(nums: number[]): number[] {
	if (!nums.length || nums.length === 1) return nums;
	let front = 0, end = nums.length - 1;
	const isOdd = (num: number) => num & 1;
	while (front < end) {
		if (isOdd(nums[front]) && !isOdd(nums[end])) {
			[nums[front], nums[end]] = [nums[end], nums[front]];
			front++;
			end--;
		}
		else if (!isOdd(nums[front]) && !isOdd(nums[end])) front++;
		else if (!isOdd(nums[front]) && isOdd(nums[end])) {
			front++;
			end--;
		} else {
			end--;
		}
	}
	return nums;
};