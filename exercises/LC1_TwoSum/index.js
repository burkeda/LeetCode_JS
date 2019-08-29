// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(arr, target) {
    let hashMap = {
        2: 7,
        7: 2 
    };
    let results = [];
    if(!arr || !target) {
        return "arr or target null or undefined";
    }

    for (let i = 0; i < arr.length; i++) {
        // target - i  == num we're looking for
        // 9 - 2 === 7
        // hashMap[2] == 7
        //  is 7 in hashmap?
            // yes, add index of 2 index of 7 to return array
        
        let num = target - arr[i];  // 9 -2 == 7
        if(hashMap[num]) {
            results.push()
        }
        
        
    }
}

module.exports = twoSum;
