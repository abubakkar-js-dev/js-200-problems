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
