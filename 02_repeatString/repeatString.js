const repeatString = function(strng, reps) {
    if(reps < 0) return "ERROR"
    let stringHolder = "";
    for(let i = 0; i < reps; i++){
        stringHolder = stringHolder.concat(strng);
        }
    return stringHolder;
 };

// Do not edit below this line
module.exports = repeatString;
