const getTheTitles = function(objArray) {
    let array = [];
    for(obj of objArray){
        array.push(obj.title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
