/*
1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
/** 建立一个Map，遍历数组。如果Map中存有target-cur的键，直接返回(对应值, index)；若没有，存储(cur, index) */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
	let diffMap = new Map();
	let result = [];
	nums.forEach((num, index) => {
			if(diffMap.has(target-num)) {
					result = [diffMap.get(target-num), index];
			}
			diffMap.set(num, index);
	});
	return result;
};

 var twoSumImproved = function (nums, target): Array<number> {
   let diffMap = new Map();
   nums.forEach((num, index) => {
     if (diffMap.has(target - num)) {
       return [diffMap.get(target - num), index];
     }
     diffMap.set(num, index);
   });
   return [];
 };