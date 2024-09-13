let x = 5;
let y = 7;

console.log(x,y);
console.log('---------------------');
[x,y] = [y,x];
console.log(x,y);

function swap(a,b){
    a = a+b;
    b = a-b;
    a = a-b;
    
    return [a,b];
}

[a,b] = swap(4,2)

console.log(a,b);