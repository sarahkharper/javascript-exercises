const sumAll = function(num1, num2) {

//check that both inputs are numbers
    if(typeof num1 != "number" || typeof num2 != "number") return "ERROR";

//check that neither input is negative
    if(num1 < 0 || num2 < 0) return "ERROR";

//check that both inputs are integers
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

//create variable to hold the final sum
let finalSum = 0;

//loop through the given numbers
    for(i = Math.min(num1,num2); i <= Math.max(num1,num2); i++){
        //add the current number to the sum
        finalSum += i;
    }

//return the sum post-loop
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
