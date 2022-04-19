/*
516. 最长回文子序列
给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb" 
输入：s = "cbbd"
输出：2
解释：一个可能的最长回文子序列为 "bb" 
*/
// dp[i][j] 表示 s 的第 i 个字符到第 j 个字符组成的子串中，最长的回文序列长度是多少。
// s[i] == s[j] -> dp[i][j] = dp[i+1][j-1]+2
// s[i] != s[j] -> dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
// i需要从后往前遍历
function longestPalindromeSubseq(s: string): number {
	const dp: number[][] = Array.from(Array(s.length), () => new Array(s.length).fill(0));
	for (let i = s.length - 1; i >= 0; i--) {
		dp[i][i] = 1;
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = dp[i + 1][j - 1] + 2;
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[0][s.length - 1];
};