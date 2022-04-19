/*
5. Given a string s, return the longest palindromic substring in s.
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Input: s = "cbbd"
Output: "bb"
Input: s = "ac"
Output: "a"
*/
/** 回文串可能有中心也可能没有，因此遍历时要注意检查(该元素的前一个, 该元素的后一个) & (该元素, 该元素的后一个) */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string): string {
  function expandAroundCenter(left: number, right: number) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  if (s.length < 2) return s;
  let maxLength = 1, start = 0;
  for (let i = 0; i < s.length; i++) {
    // aba
    expandAroundCenter(i - 1, i + 1);
    // abba
    expandAroundCenter(i, i+1);
  }
  return s.substring(start, start + maxLength);
};
