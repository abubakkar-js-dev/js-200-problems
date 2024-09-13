let numb = 13;
let isPrime = true;

if(numb !== 1){
    for(let i =2; i<Math.sqrt(numb); i++){
        if(numb % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log('This a prime number.');
    }else{
        console.log('This is not a prime number.');
    }
}else{
    console.log('1 is not allow');
}