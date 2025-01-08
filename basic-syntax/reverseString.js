function reverseString(str){
    str = str.split('');
    // return str.reverse().join('');
    let newStr = [];
    for(let char of str){
        newStr.unshift(char);
    }
    return newStr.join('');
}
console.log(reverseString('Hello Baby,'));


// revers string in another way

const reverseString2 = (str)=>{
    return str.split("").reverse().join("");
}

// test program
console.log(reverseString2('Hello Baby,'));

