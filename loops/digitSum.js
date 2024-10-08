// function digitSum(num){
//     let numStr = num.toString();
//     let sum = 0;

//     for(let char of numStr){
//         sum += Number(char);
//     }
//     return sum;
// }

// console.log(digitSum(124))


function digitSum(number){
    const numberStr = number.toString();
    let sum = 0;

    for(let i = 0; i < numberStr.length; i++){
        sum += Number(numberStr[i]);
        // console.log(numberStr[i])
    }
    return sum;
}

console.log(digitSum(121));