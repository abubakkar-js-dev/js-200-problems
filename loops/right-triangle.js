let line = ''
for(let i=1; i<=20; i++){
    line += '*'
    console.log(line);
}


const rightTriangle = (size)=>{
    let line = '';
    for(let i=1; i<=size; i++){
        line += '*';
        // console.log(line);
    }
    return line;
}

console.log(rightTriangle(20))

