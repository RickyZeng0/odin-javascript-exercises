const totalIntegers = function (object) {
    if(typeof object !== "object" && object !== null) return;

    let values = Object.values(object);
    let result = 0;
    result += values.filter((member) => Number.isInteger(member)).length;
    let nestedObjects = values.filter((member) => 
        typeof member === "object" && member !== null);
    let additionalResult = nestedObjects.reduce(
        (acc, nestedObject) => acc + totalIntegers(nestedObject),
        0
    );
    return result + additionalResult;
};

// Do not edit below this line
module.exports = totalIntegers;
totalIntegers([[], [], []]);
