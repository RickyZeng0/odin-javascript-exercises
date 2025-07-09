const palindromes = function (string) {
    let charArray = string.split("");
    let editedString = charArray.filter( char => {
        if(char == " " || char == "!" || char == "," || char == "."){
            return false;
        }
        return true;
    }).join("").toLowerCase();
    const EVEN_NUMBER = Math.floor(editedString.length/2) ;
    const LAST_INDEX = editedString.length - 1;
    for(let i=0 ; i<EVEN_NUMBER ; i++){
        if(editedString[i] != editedString[LAST_INDEX-i]) return false; 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
// let a = palindromes('advda');
// console.log(a,typeof a);

