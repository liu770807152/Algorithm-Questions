/*
134.There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. 
You begin the journey with an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, 
otherwise return -1. If there exists a solution, it is guaranteed to be unique.

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
*/
/** 如果总油量 > 总消耗量，则一定有一个起点。从第一个点开始遍历，如果发现走不下去了，则之前的点肯定不是起点，因此我们把当前油量清零，起点假设为下一个点 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
	let totalGas = 0, totalCost = 0;
	for (let index = 0; index < gas.length; index++) {
		totalGas += gas[index];
		totalCost += cost[index];
	}
	if (totalGas < totalCost) {
		return -1;
	}
	let currentGas: number = 0, start: number = 0;
	for (let index = 0; index < gas.length; index++) {
		currentGas += gas[index] - cost[index];
		if (currentGas < 0) {
			start = index + 1;
			currentGas = 0;
		}
	}
	return start;
};