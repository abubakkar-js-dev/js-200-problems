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