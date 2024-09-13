function isPalindromeNumber(num){
    num = num.toString().split('');
    let num2 = [];

    for(let char of num){
        num2.unshift(char);
    }
    num = num.join('');
    num2 = num2.join('');
    console.log(num,num2);
    return num === num2 ? true : false;
}

console.log(isPalindromeNumber(12321));