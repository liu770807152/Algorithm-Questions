/*
55.You are given an integer array nums. 
You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/
/** 
 * 动态规划：Top-Down, 递归树状展开，3就3分支，每个分支是对应后续元素的值。建立一个数组，记录每个元素状态是未知0、通1还是不通-1，递归开始时检查，结束时更新。
 * 				 Bottom-Up, 从后往前，数组的最后肯定是1，循环过程中看看该元素所能到达的范围内有没有1，有则记为1，没有记为-1。最后看看开头是不是1.
 * 贪心：也是Bottom-Up, 从最后开始循环。记当前元素index为maxJump，如果找到前面一个元素的index+值 > maxJump，则前面可以到达该元素，于是下标挪到前面那个元素，更新maxJump为那个元素的index。
 * 			最后看看maxJump是不是0。
 */
function canJump(nums: number[]): boolean {
	const totalLength = nums.length, memo = Array(totalLength).fill(0);
	memo[totalLength - 1] = 1;
	// start recursion
	function jump(position: number) {
		if (memo[position] === 1) {
			return true;
		} else if (memo[position] === -1) {
			return false;
		}
		// 防止越界
		const maxJump = Math.min(position + nums[position], totalLength - 1);
		for (let i = position + 1; i <= maxJump; i++) {
			if (jump(i)) {
				memo[position] = 1;
				return true;
			}
		}
		memo[position] = -1;
		return false;
	}
	return jump(0);
};

console.log(canJump([2,3,1,1,4]))

function canJump2(nums: number[]): boolean {
	const totalLength = nums.length, memo = Array(totalLength).fill(-1);
	memo[totalLength - 1] = 1;
	// start iteration
	for (let i = totalLength - 2; i >= 0; i--) {
		// 防止越界
		const maxJump = Math.min(i + nums[i], totalLength - 1);
		for (let j = i + 1; j <= maxJump; j++) {
			if (memo[j] === 1) {
				memo[i] = 1;
				break;
			}
		}
	}
	return memo[0] === 1;
};

console.log(canJump2([2,3,1,1,4]))

function canJumpGreedy(nums: number[]): boolean {
	let maxJump = nums.length - 1;
	for (let i = nums.length - 2; i >= 0; i--) {
		if (i + nums[i] >= maxJump) {
			maxJump = i;
		}
	}
	return maxJump === 0;
};

console.log(canJumpGreedy([2,3,1,1,4]))