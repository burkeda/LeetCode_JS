// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxSubstring = 0;
    let hashMap = {};   // A: index of last time this char appeared

    for(let i = 0; i < s.length; i++) {
        
    }
}

module.exports = lengthOfLongestSubstring;
