let str = '';
let str2 = '2';

function emtpyStringChecker(str){
    if(str.length === 0){
        return 'It is emty string';
    }else{
        return 'It is not emty string';
    }
}

console.log(emtpyStringChecker(str));