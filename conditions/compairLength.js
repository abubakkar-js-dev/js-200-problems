function compairLength(a,b){
    if(typeof a === 'number' || typeof b === 'number'){
        a = a.toString();
        b = b.toString();
    }
    if(a.length === b.length){
        return true;
    }else{
        return false;
    }
}

console.log(compairLength('Hi','By'));
console.log(compairLength(3,12));