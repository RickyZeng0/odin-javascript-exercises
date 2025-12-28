const removeFromArray = function(array,...removedItems) {
    for(let removedItem of removedItems){
        while(true){
            let index = array.indexOf(removedItem);
            if(index == -1) break;
            array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
