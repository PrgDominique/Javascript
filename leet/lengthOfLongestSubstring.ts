function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  const uniqueChars = new Set<string>();
  let maxLen = 0;

  while (right < s.length) {
    if (uniqueChars.has(s[right])) {
      uniqueChars.delete(s[left]);
      left++;
    } else {
      uniqueChars.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    }
  }

  return maxLen;
}

