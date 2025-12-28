const sumAll = function(num1 , num2) {
    if(num1<0 || num2<0 || typeof(num1) != "number" || typeof(num2) != "number" || 
    (Math.round(num1) != num1) || (Math.round(num2) != num2 ) ){
        return "ERROR";
    }
    let sum = 0 , start = num1 , end = num2;
    if(num1 > num2){
        start = num2;
        end = num1;
    }
    for(let counter = start ; counter <= end ; counter++){
        sum += counter;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
