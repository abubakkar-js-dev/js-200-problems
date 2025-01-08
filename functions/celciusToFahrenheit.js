// understand the problem
// match the formula to convert celsius to fahrenheit
// formula: (celsius * 9/5) + 32
// return the result



// code implementation
function celciusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
};

// test program
console.log(celciusToFahrenheit(10));


// another way to solve the problem

const celciusToFahrenheit2 = (celsius)=>{
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

// test program
console.log(celciusToFahrenheit2(10));

