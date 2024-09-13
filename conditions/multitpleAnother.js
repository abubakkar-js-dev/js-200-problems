let a = 23;
let b = 2;
let c = 10;

if(a !== 0 && b !== 0 && c !== 0){
     if(a % b ===0 || a % c ===0){
        console.log('A is divisible of another')
    }else if(b % a === 0 || b % c === 0){
        console.log("B is divisible of another");
    }else if(c % a === 0 || c % b === 0){
        console.log("C is divisible of another");
    }else{
        console.log('No one is divisible by another');
    }
}else{
    console.log("0 is not allow");
}