/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
/* 先把所有数组元素按起始数字的大小排序，然后建立一个临时数组，循环intervals，如果当前数组的起始数字<=临时数组的结尾数字，则用max()合并两个区间。
 * 最后循环结束别忘了把最后的临时数组加入result！ 
 * */
function merge(intervals: number[][]): number[][] {
	if (intervals.length < 2) {
		return intervals;
	}
	intervals.sort((a, b) => a[0] - b[0]);
	let cur: number[] = intervals[0], result: number[][] = [];
	for(const arr of intervals) {
		if (cur[1] >= arr[0]) {
			// [1, 6] & [2, 4]
			cur[1] = Math.max(cur[1], arr[1]);
		} else {
			result.push(cur);
			cur = arr;
		}
	}
	// Don't forget to push the last one!!!
	if (cur.length > 0) result.push(cur);
	return result;
};

console.log(merge([[1,4],[0,4]]));