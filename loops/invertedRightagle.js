// function invertedRightangle(size){
//     let line = ''.repeat(size);
//     for(let i=size; i>=0; i--){
//         line += '*';
//         console.log(line);
//     }
// }

// // test program
// console.log(invertedRightangle(8))


// inverted right angle

const invertedRightangle = (size)=>{
    for(let i = size; i>=0; i--){
        let line = "*".repeat(i);
        console.log(line)
    }
}

// test program
console.log(invertedRightangle(8))
