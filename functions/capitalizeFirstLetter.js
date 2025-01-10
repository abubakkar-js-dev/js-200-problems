function capitalizeFirstString(str){
    const words = str.split(" ");
    for(let i=0; i<words.length;i++){
        words[i] =words[i][0].toUpperCase() + words[i].slice(1);
    }
   return words.join(" ");


}

// test program

const output = capitalizeFirstString('this is my first and last opinion');
console.log(output);

const tesStr = "hello world";
const result = tesStr.split(" ").map(word=> word[0].toUpperCase() + word.substring(1)).join(" ");
console.log(result);