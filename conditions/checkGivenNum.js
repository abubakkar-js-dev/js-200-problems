function isBetween(num1,num2,checkNumber){
    const max = Math.max(num1,num2);
    const min = Math.min(num1,num2);

    if(checkNumber >= min && checkNumber <= max){
        return true;
    }else{
        return false;
    }
}

console.log(isBetween(5,8,4));