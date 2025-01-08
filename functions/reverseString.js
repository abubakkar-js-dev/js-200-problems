function reverseString(str){
    const reverse = str.split('').reverse().join('');
    return reverse;
};

console.log(reverseString("hello"));

// another way to reverse a string

const reverseString2 = (str)=>{
    let reversed = "";
    for(let i = str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString2("hello bangladesh"));


// another way to reverse a string

const reverseString3 = (str)=>{
    str = str.split("");
    let reversed = [];
    for(let i =0; i<str.length; i++){
        reversed.unshift(str[i]);
    }
    return reversed.join("");
}

//test the final program
console.log(reverseString3("This is the another way to reversea string"));