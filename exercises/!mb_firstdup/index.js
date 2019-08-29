 /** Expedia question:
  * Describe and code an algorithm that returns the first duplicate 
  * character in a string?
  */
 function return_first_dup(input) {
    let hashMap = {};

  // for string i
  //  if hashTable[i]
  //      return string[i]
  //  hasthable[i] = 1;
    let dup = "";
    if(!input) {
        return dup;
    }
    
    for(let i=0; i < input.length; i++) {
        if(hashMap[input[i]]) {
            dup = input[i];
            break;
        }
        hashMap[input[i]] = 1;
    }
    
    return dup;
}


// console.log(return_first_dup('abca'));

// console.log(return_first_dup('abca'));

module.exports = return_first_dup ;
