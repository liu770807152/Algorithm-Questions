/* 
	15.Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
	Notice that the solution set must not contain duplicate triplets.
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Input: nums = [0]
  Output: []
*/
/** 先排序。遍历时记录上一个元素prev，当前还是prev时跳过，否则用双指针法看看该元素后面的元素们，有没有相加等于0的，left>=right时结束，遍历下一个元素。 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    let prev: number = null;
    nums.forEach((num, index) => {
        if (!(num === prev) && index < nums.length - 2) {
            checkSumOfThree(index);
        }
        prev = num;
    });
    return result;
    
    function checkSumOfThree(index: number): void {
      let left = index + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[index] + nums[left] + nums[right];
        if (sum === 0) {
            result.push([nums[index], nums[left], nums[right]]);
						left++;
						right--;
						while (left < right && nums[left] === nums[left-1]) left++;
            while (left < right && nums[right] === nums[right+1]) right--;
        }
        else if (sum > 0) {
            right--;
        }
        else if (sum < 0) {
            left++;
        }
      }
    }
};

console.log(JSON.stringify(threeSum([-2,0,0,2,2])) === JSON.stringify([[-2,0,2]]));
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])) === JSON.stringify([[-1,-1,2],[-1,0,1]]));