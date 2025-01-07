// function printHollowSquare(size) {
//     for (let row = 1; row <= size; row++) {
//       if (row === 1 || row === size) {
//         // Print full row of stars for the first and last row
//         console.log('*'.repeat(size));
//       } else {
//         // Print star, spaces, and star for the middle rows
//         console.log('*' + ' '.repeat(size - 2) + '*');
//       }
//     }
//   }
  
//   // Example: Print a 5x5 hollow square
//   printHollowSquare(15);

for(let row=1; row<= 10; row++){
  if(row === 1 || row === 10){
    console.log('*'.repeat(10));
  }else{
    console.log('*' + " ".repeat(10-2)+ '*');
  }
}


function printHollowSquare(size){
  for(let row=1;row<=size;row++){
    if(row===1||row===size){
      console.log('*'.repeat(size));
    }else{
      console.log('*'+' '.repeat(size-2)+'*');
    }
  }
}
 
printHollowSquare(8)




  