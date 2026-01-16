const contains = function(object, target) {
    if(typeof object !== "object" || object === null){
        return false;
    }
    for(let value of Object.values(object)){
        if(Number.isNaN(value) && Number.isNaN(target)) return true;
        if(value === target || contains(value , target)) return true;
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
