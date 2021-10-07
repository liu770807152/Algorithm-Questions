/*
217.Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true
Input: nums = [1,2,3,4]
Output: false
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function containsDuplicate(nums: number[]): boolean {
	const set = new Set();
	for (const num of nums) {
		if (set.has(num)) {
			return true;
		} else {
			set.add(num);
		}
	}
	return false;
};

// 极致省内存方法：利用sort
function containsDuplicate2(nums: number[]): boolean {
	let result = false;
	nums.sort((a, b) => {
		if (a < b) return -1;
		else if (a > b) return 1;
		else {
			result = true;
			return 0;
		}
	});
	return result;
};