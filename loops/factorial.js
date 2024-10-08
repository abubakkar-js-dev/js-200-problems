function factorialNumber(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorialNumber(5));