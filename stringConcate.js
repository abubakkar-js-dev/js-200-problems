function concateTwoString(str1,str2){
    let newStr = str1.concat(str2);
    return newStr;
}

const firstName = 'Abu';
const lastName = 'Bakkar';

const fullName = concateTwoString(firstName,lastName);
console.log(fullName);