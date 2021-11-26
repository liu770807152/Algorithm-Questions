/*
You are given an integer array nums and an integer target.
You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
Input: nums = [1], target = 1
Output: 1
*/

/** 纯回溯，复杂度为O（2^N），太高了 */
function findTargetSumWays(nums: number[], target: number): number {
	function recursiveSum(remainedNums: number[], target: number, curNums: number[]): void {
		if (curNums.length === nums.length) {
			if (target === 0) result.add([...curNums]);
			return;
		}
		const first = remainedNums[0];
		remainedNums = remainedNums.slice(1);
		curNums.push(first * -1);
		recursiveSum(remainedNums, target - first, curNums);
		curNums.splice(curNums.length-1, 1, first);
		recursiveSum(remainedNums, target + first, curNums);
		curNums.pop();
	}
	const result = new Set<number[]>();
	recursiveSum(nums, target, []);
	return result.size;
};

/** 用备忘录优化，注意key是index和remain组成的一对，因为每一个index都对应两个remain！ */
function findTargetSumWaysBetter(nums: number[], target: number): number {
	function backTrack(nums: number[], index: number, remain: number): number {
		if (index === nums.length) {
			if (remain === 0) return 1;
			return 0;
		}
		let key = index+','+remain, result: number;
		if (memo.has(key)) return memo.get(key);
		// 因为result是计数器，所以可以加起来
		result = backTrack(nums, index+1, remain-nums[index]) + backTrack(nums, index+1, remain+nums[index]);
		memo.set(key, result);
		return result;
	}
	const memo: Map<string, number> = new Map();
	return backTrack(nums, 0, target);
};