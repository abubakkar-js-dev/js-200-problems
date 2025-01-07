for(let i = 1; i<=15; i++){
    let line = "";

    //  print the spaces
    for(let j = 1; j <= 15 - i; j++){
        line += " ";
    }
    // print the stars 
    for(let k = 1; k <= i*2-1; k++){
        line += '*';
    }
    console.log(line);
}




  
  