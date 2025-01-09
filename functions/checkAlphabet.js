// Write a function to check if a string contains only alphabets.
//understand the problem
//input: string
//output: boolean
//edge cases: empty string, string with numbers, string with special characters
//constraints: none
//approach: use regex to check if the string contains only alphabets
//regex: /^[a-zA-Z]+$/
//time complexity: O(n)
//space complexity: O(1)

const checkAlphabet = (str)=>{
    const alphabets = /^[a-zA-Z]+$/;
    return alphabets.test(str);
}


// solve like c++ approach

const checkAlphabet2 = (str)=>{
    if(str.length ===0){
        return false;
    }
    for(let i=0;i<str.length;i++){
        if(str[i] >='a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z'){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}

//test cases
console.log(checkAlphabet("hello")); //true
console.log(checkAlphabet("hello123")); //false
console.log(checkAlphabet("hello!@#")); //false
console.log(checkAlphabet("")); //false
console.log(checkAlphabet("123")); //false

console.log("--------------------------------");

// test cases for checkAlphabet2
console.log(checkAlphabet2("hello")); //true
console.log(checkAlphabet2("hello123")); //false
console.log(checkAlphabet2("hello!@#")); //false
console.log(checkAlphabet2("")); //false
console.log(checkAlphabet2("123")); //false


