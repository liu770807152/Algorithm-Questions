import java.util.TreeSet;

/*
414. Given an integer array nums, return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/
/** 用一个有序集合维护数组中的前3大的数。每遍历一个数，将其插入有序集合。当集合大小超过3时，删除最小的数。遍历结束后，若集合大小等于3，返回最小的数；否则返回最大值（依据题意） */
class Solution {
	public static int thirdMax(int[] nums) {
		TreeSet<Integer> set = new TreeSet<>();
		for (int num : nums) {
			set.add(num);
			if (set.size() > 3) {
				set.remove(set.first());
			}
		}
		return set.size() == 3 ? set.first() : set.last();
	}
	public static void main(String[] args) {
		System.out.println(thirdMax(new int[]{2,2,3,1}));
	}
}