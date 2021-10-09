/*
922. Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Input: nums = [2,3]
Output: [2,3]
*/
/** 还是双指针法，但是一个在第一个位置，一个在第二个位置。二者都走两步，前者只允许偶数，后者只允许奇数。当前者发现奇数时，移动后者，知道发现偶数，二者互换 */
function sortArrayByParityII(nums: number[]): number[] {
	if (nums.length < 2) return nums;
	let snd = 1;
	for (let fst = 0; fst < nums.length; fst += 2) {
		if (nums[fst] & 1) {
			while (nums[snd] & 1 && snd < nums.length) snd += 2;
			[nums[fst], nums[snd]] = [nums[snd], nums[fst]];
		}
	}
	return nums;
};