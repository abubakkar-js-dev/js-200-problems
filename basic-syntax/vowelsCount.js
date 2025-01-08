    function vowelCounter(str){
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    str = str.toLowerCase().split('');
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count += 1;
        }
    }
    return count;
}

console.log(vowelCounter('Amar Sonar Bangla'));


// solve the problem in another way

const vowelCounter2 = (str)=>{
    return str.toLowerCase().split("").filter(char=>['a','e','i','o','u'].includes(char)).length;
}

// test program
console.log(vowelCounter2('Amar Sonar Bangla'));
