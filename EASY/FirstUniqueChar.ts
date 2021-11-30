/*
剑指Offer 50. Find the first char of string s that only appears once. If there's no such a char, return a single space. s only includes lower case letters.

Input: s = "abaccdeff"
Output: 'b'
Input: s = ""
Output: ' '
*/

function firstUniqueChar(s: string): string {
  const uniques = new Map(),
    duplicates = new Set();
  let index = 0,
    result: string = null,
    min: number = Number.MAX_SAFE_INTEGER;
  for (const char of s) {
    if (uniques.has(char)) {
      duplicates.add(char);
      uniques.delete(char);
    } else {
      if (!duplicates.has(char)) uniques.set(char, index++);
    }
  }
  uniques.forEach((value, key) => {
    if (value < min) {
      min = value;
      result = key;
    }
  });
  return result ? result : ' ';
}

console.log(firstUniqueChar('abaccdeff'));
console.log(firstUniqueChar('aaccff'));
