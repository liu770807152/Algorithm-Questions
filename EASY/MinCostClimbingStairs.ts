/*
746. You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/
/** From top to bottom, enhanced recursion. */
function minCostClimbingStairs(cost: number[]): number {
	const map = new Map();
	let n = 0;
	while (n <= cost.length) {
		if (n <= 1) {
			map.set(n, cost[n]);
		} else if (n < cost.length) {
			map.set(n, Math.min(map.get(n-2), map.get(n-1)) + cost[n]);
		} else {
			// reach the end
			map.set(n, Math.min(map.get(n-1), map.get(n-2)));
		}
		n++;
	}
	return map.get(n-1);
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));