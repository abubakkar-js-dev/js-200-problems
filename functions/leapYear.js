// understand the problem
// check if a year is a leap year
// a leap year is a year that is divisible by 4, but not divisible by 100, unless it is also divisible by 400
// return true if it is a leap year, false otherwise


// code implementation

function leapYear(year){
    return (year %4 === 0 && year %100 !== 0) || (year %400 === 0);
}

// test program
console.log(leapYear(2024));


// solve the problem in another way

const leapYear2 = (year)=>{
    if(year %4 === 0 && year %100 !== 0){
        return true;
    }
    if(year %400 === 0){
        return true;
    }
    return false;
}

// test program
console.log(leapYear2(2024));


// which is js concept are used in this problem?

// 1. ternary operator
// 2. logical operator

// which is the best way to solve the problem?


