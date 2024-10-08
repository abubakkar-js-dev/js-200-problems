function reverseNumber(num){
    // return num.toString().split("").reverse().join("");
    num = num.toString().split("");
    let newNum = [];
    for(let char of num){
        newNum.unshift(char);
    }
    return newNum.join("");
}

console.log(reverseNumber(1236));