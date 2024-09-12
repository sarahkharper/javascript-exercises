const removeFromArray = function(baseArray, ...itemsToRemove) {
    //create empty array to hold indexes of items to remove
    let indexes = [];

    //set up for loop to iterate through the items to remove
    for(const item of itemsToRemove){
        //check if item is in base array, skip if not
        if (baseArray.indexOf(item) > -1){
            //check if item is at each index in base array
            for(i = 0; i < baseArray.length; i++){ 
                if(baseArray[i] === item){
                    indexes.push(i);
                } 
            }
        }
    }
    //sort array of indexes in descending order
    //console.log(indexes);
    indexes.sort().reverse();
    //remove items at designated indexes from array
    for(j = 0; j < indexes.length; j++){
        baseArray.splice(indexes[j],1);
    }

    return baseArray;
};

// Do not edit below this line
module.exports = removeFromArray;
