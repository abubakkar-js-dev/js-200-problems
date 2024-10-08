// function fibonacci(num){
//     let num1 = 0;
//     let num2 = 1;
//     let nextTerm;

//     for(let i = 0; i<num; i++){
//         console.log(num1);
//         // nextTerm = num1 + num2;
//         [num1,num2] = [num2, num1 + num2];
//         // console.log(num1);
//     }
// }


// fibonacci(10);



function fibonacciSeries(num){
    let num1 = 0;
    let num2 = 1;
    let nextTerm;
    let output = []
    for(let i = 0; i < num; i++){
        output.push(num1);
        // console.log(num1);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }
    return output;
}

console.log(fibonacciSeries(10));

//  0,1,2,3,4,5
//  0,1,1,2,3,5,8,13,21
