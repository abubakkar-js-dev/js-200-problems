function findAvgOfThreeNum(a,b,c){
    const sum = a + b + c;
    const avg = (sum / 3).toFixed(2);
    return avg;
}

console.log(findAvgOfThreeNum(2,6,8));