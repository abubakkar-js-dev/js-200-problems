const countVowels = (str)=>{
    const vowels = 'aeiou'.split('')
    str = str.split('');
    let totalVowels = 0;
    for(let i=0; i<str.length;i++){
        if(vowels.includes(str[i])){
            totalVowels += 1;
        }
    }

    return totalVowels;
}

// test program
const output = countVowels('Hello bangladesh aea')
console.log(output);


// another way

const countVowels2 = (str)=>{
    str = str.split('');
    return str.reduce((total,char)=>['a','e','i','o','u'].includes(char)?total+=1:total,0);
}

const output2 = countVowels2('Ami to vai kisui pari nah, kivabe ki kormu');
console.log(output2);