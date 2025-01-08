// problem defination   
// replace a character in a string with another character

// step to solve the problem
// 1. convert the string to lowercase
// 2. split the string into an array
// 3. loop through the array
// 4. if the character is the same as the character to replace, replace it with the character to replace
// 5. join the array back into a string
// 6. return the string

// code implementation
function replaceChar(str,replaceChar,byReplace){
    str = str.toLowerCase().split('');
    let index = 0;
    // for(let char of str){
    //     if(char === replaceChar){
    //         console.log(char);
    //         str[index] = byReplace;
    //     }
    //     index++;
    // }
    for(let i=0; i<str.length; i++){
        if(str[i] === replaceChar){
            str[i] = byReplace;
        }
    }
    return str.join('');
}

let names = 'Abu Bakkar';
console.log(replaceChar(names,'b','c'));


// solve the problem in another way

const replaceChar2 = (str,replaceChar,byReplace)=>{
    return str.toLowerCase().split("").map(char=>char === replaceChar ? byReplace : char).join("");
}

// test program
console.log(replaceChar2(names,'b','c'));





