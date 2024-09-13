function squareChecker(num){
    if(Math.sqrt(num) === Math.round(Math.sqrt(num))){
        return true;
    }else{
        return false;
    }
}

console.log(squareChecker(50));
console.log(squareChecker(25));