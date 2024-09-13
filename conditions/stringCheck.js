function checkSpecificString(str,checkStr){
    str = str.split(" ");
    if(str.includes(checkStr)){
        return true;
    }else{
        return false;
    }
}

console.log(checkSpecificString('Hello Bangladesh','Bangladesh'))


// lets try it with for loop

let names = 'Abu Bakkar';
names = names.split(" ");
let checkName = 'Bakkar';
let isHave = false;

for(let word of names){
    // console.log(word);
if(word === checkName){
    isHave = true;
    break;
}

}
if(isHave){
    console.log('Yes, This a part of this sentence.');
}else{
    console.log('Sorry, not founded!');
}