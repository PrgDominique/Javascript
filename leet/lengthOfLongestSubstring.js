function lengthOfLongestSubstring(s) {
    var left = 0;
    var right = 0;
    var uniqueChars = new Set();
    var maxLen = 0;
    while (right < s.length) {
        if (uniqueChars.has(s[right])) {
            uniqueChars.delete(s[left]);
            left++;
        }
        else {
            uniqueChars.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }
    }
    return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
