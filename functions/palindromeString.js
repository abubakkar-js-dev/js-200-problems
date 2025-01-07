const checkPalindromeString = (str)=>{
    const str2 = str.split('').reverse().join("");
    if(str === str2){
        return true;
    }else{
        return false;
    }
};

const output = checkPalindromeString('ababac');
console.log(output);