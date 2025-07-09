const findTheOldest = function(people) {
    return people.sort( (a,b) => {
        if(b.yearOfDeath === undefined) b.yearOfDeath = 2025;
        if(a.yearOfDeath === undefined) a.yearOfDeath = 2025;
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge - aAge ;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
