const reverseString = function(inputString) {
    //split any separate words in the string into separate array items
    if(inputString === ""){
        return inputString;
    }
    let splitArray = inputString.split("");
    let reversedArray = [];
    for(i = 0; i < splitArray.length; i++){
        reversedArray.unshift(splitArray[i]);
    }
    let reversedString = reversedArray.join("");
    return reversedString;
};

//SIMPLER SOLUTION: return string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
