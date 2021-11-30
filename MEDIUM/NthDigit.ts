/*
Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

Input: n = 3
Output: 3
Input: n = 11
Output: 0
Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/

/** 爆内存了，需要数学方法解题：https://www.bilibili.com/video/BV1df4y1K7rS */
function findNthDigit(n: number): number {
  const arr = new Array(n).fill(0).map((cur, index) => index + 1);
  const char = arr
    .toString()
    .replace(/,/g, '')
    .charAt(n - 1);
  return char.charCodeAt(0) - '0'.charCodeAt(0);
}

function findNthDigitBetter(n: number): number {
  let base = 1,
    weight = 9,
    result: number,
    index: number;
  while (n > base * weight) {
    // 300
    n -= base * weight;
    base++;
    weight *= 10;
  }
  // n 111 base=3, weight=900
  n--;
  result = Math.pow(10, base - 1) + n / base;
  index = n % base;
  return result.toString().charAt(index).charCodeAt(0) - '0'.charCodeAt(0);
}

console.log(findNthDigit(3));
console.log(findNthDigit(11));
