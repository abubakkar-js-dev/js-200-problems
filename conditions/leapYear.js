let year = 2024;

if(year % 4 === 0 && year % 100 !== 0){
    console.log('This is leap year');
}else if(year % 400 === 0){
    console.log('This is leap year');
}else{
    console.log('This is not a leap year.');
}