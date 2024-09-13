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

