// understand the problem
// check if a number is prime

// first way to check if a number is prime

// mathmatical definition of prime number
// a prime number is a number that is greater than 1 and has no positive divisors other than 1 and itself.

// flow chart or algorithm to solve the problem

// 1. if the number is less than or equal to 1, then it is not a prime number
// 2. if the number is greater than 1, then check if the number is divisible by any number from 2 to the number itself
// 3. if the number is divisible by any number from 2 to the number itself, then it is not a prime number
// 4. if the number is not divisible by any number from 2 to the number itself, then it is a prime number

// code implementation

const checkIsPrime = num=>{
    if(num <= 1){
        return false;
    }
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

// test program
console.log(checkIsPrime(11));


// more better way to check if a number is prime

const checkIsPrime2 = (num)=>{
    if(num <= 1){
        return false;
    }
    for(let i = 2; i<Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;    
}

// test program
console.log(checkIsPrime2(12));


// last some notes to remember
// 1. the time complexity of the first way to check if a number is prime is O(n)
// 2. the time complexity of the second way to check if a number is prime is O(sqrt(n))
// 3. the space complexity of the first way to check if a number is prime is O(1)
// 4. the space complexity of the second way to check if a number is prime is O(1)


// what is the time complexity of the first way to check if a number is prime?
// O(n)

// what is the time complexity of the second way to check if a number is prime?
// O(sqrt(n))

// what is the space complexity of the first way to check if a number is prime?
// O(1) // because we are not using any extra space

// what is the space complexity of the second way to check if a number is prime?
// O(1) // because we are not using any extra space


// the better way is the second way to check if a number is prime because it has a lower time complexity
// the first way is the first way to check if a number is prime because it is easier to understand and implement
