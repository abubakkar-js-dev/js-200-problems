let x = 5;
let y = 7;

console.log(x,y);
console.log('---------------------');
[x,y] = [y,x];
console.log(x,y);


// solve the problem in another way

function swap(a,b){
    a = a+b;
    b = a-b;
    a = a-b;
    
    return [a,b];
}

[a,b] = swap(4,2)

console.log(a,b);


// revise the code 
const swap2 = (a,b)=>{
    return [b,a];
}

// test program
console.log(swap2(4,2));
