const palindromes = function (inString) {
    //create string with all valid characters (letters and numbers)
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //convert string to array of strings and filter out only valid characters
    const ogArray = inString.toLowerCase()
                      .split('')
                      .filter(char => alphanumerical.includes(char));
    console.log(ogArray);
    //reverse order of items in array
    const revArray = ogArray.slice(); //create copy of array
    revArray.reverse(); //reverse copy of array
    console.log(revArray);
    //JOIN both og and reversed array into strings and convert to lowercase
    //return true if og array == reversed array
    return revArray.join('') === ogArray.join('');
};

const bool = palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
