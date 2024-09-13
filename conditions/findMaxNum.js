function findMaxNum(a,b,c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
}

console.log(findMaxNum(1,2,3));
console.log(findMaxNum(22,6,3));

// by using math.max function
let maxNumber = Math.max(5,6,7,8,3,9,12,4,2,1,0);
console.log('The max number is:',maxNumber);
