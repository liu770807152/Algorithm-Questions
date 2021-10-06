/*
66.You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
/** 注意ES6语法的运用 */
function plusOne(digits: number[]): number[] {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] !== 9) {
			digits[i]++;
			return digits;
		} else {
			digits[i] = 0;
		}
	}
	return [1, ...digits];
};

console.log(plusOne([9]));
console.log(plusOne([1,2,4]));