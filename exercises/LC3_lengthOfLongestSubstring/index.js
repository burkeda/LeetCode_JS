// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"



/**
 * hashMap
 * let start, max = 0;
 * 
 * loop 
 *  if curr char in hashMap && has index >= start
 *      start = index for hashMap[char] + 1
 * 
 * hashMap[currChar] = currChar's index
 * 
 * if currWindowLength > max
 *  max = currWindowLength
 * 
 * return max
 * 
 *  time ===  O(n)
 *  space === O(min(m,n)): Number of keys in HashMap is bounded by the size of the string n and the size of the charset/alphabet m
 */
function lengthOfLongestSubstring(input) {
    let windowCharMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for(let i = 0; i < input.length; i++) {
        const endChar = input[i];

        if(windowCharMap[endChar] >= windowStart) {
            // dup char found, update windowStart
            windowStart = windowCharMap[endChar] + 1;
        }

        windowCharMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}
/**
 * hashMap
 * let start, max = 0;
 * 
 * loop 
 *  if curr char in hashMap has index >= start
 *      start = index for hashMap[char] + 1
 * 
 * hashMap[currChar] = currChar's index
 * 
 * if currWindowLength > max
 *  max = currWindowLength
 * 
 * return max
 */


lengthOfLongestSubstring("abcabcbb");

module.exports = lengthOfLongestSubstring;
