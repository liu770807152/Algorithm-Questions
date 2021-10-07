/*
219. Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Input: nums = [1,2,3,1], k = 3
Output: true
Input: nums = [1,0,1,1], k = 1
Output: true
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const map = new Map();
  let result = false;
	nums.forEach((num, index) => {
		if (map.has(num) && (index - map.get(num) <= k)) {
			result = true;
		}
		map.set(num, index);
	})
	return result;
};