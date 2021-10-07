/*
198.You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, 
and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/
/** 动态规划：对于任意一点，抉择：偷当前位置，放弃相邻两个位置；不偷当前位置，看下一个位置。
 *  memo[i] = max(memo[i-2] + i, memo[i-1])
 */
function rob(nums: number[]): number {
	if (nums.length === 0) {
		return 0;
	}
	if (nums.length === 1) {
		return nums[0];
	}
	// const memo = [];
	// memo[0] = nums[0];
	// memo[1] = Math.max(nums[0], nums[1]);
	let fst = nums[0], snd = Math.max(nums[1], nums[0]);
	for (let i = 2; i < nums.length; i++) {
		// const temp = Math.max(fst + nums[i], snd);
		// fst = snd;
		// snd = temp;
		[fst, snd] = [snd, Math.max(fst + nums[i], snd)];
	}
	// return memo[nums.length-1];
	return snd;
};