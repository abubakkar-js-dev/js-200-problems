const maxNumOf2 = (num1,num2)=>{
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

// test program
console.log(maxNumOf2(50,20));


// another way to find the maximum of two numbers

const maxNumOf2diff = (num1,num2)=>{
    return num1 > num2 ? num1:num2;
}

// test program
console.log(maxNumOf2diff(502,202));



// another way to find the maximum of two numbers


const maxNumOf2diff2 = (num1,num2)=>{
    return Math.max(num1,num2);
};

// test program
console.log(maxNumOf2diff2(508,20223));






