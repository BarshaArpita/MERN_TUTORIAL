//Math in JS

//Add Two number
let num1 = 5;
let num2 = 7;

console.log(typeof num1); //number

let result = num1 + num2;

console.log(result);

//Absolute
let absNum = Math.abs(-5);
console.log(absNum);

let absNum1 = Math.abs(10);
console.log(absNum1);

//Round
let roundNum = Math.round(5.6);
console.log(roundNum);

let roundNum1 = Math.round(5.4);
console.log(roundNum1);

//floor value
//It is equal to Round
let floorNum = Math.floor(3.5);
console.log(floorNum);//3

//cell value
let ceilNum = Math.ceil(5.4);
console.log(ceilNum);//6

//How to find minimum no
console.log(Math.min(5,12,78,56,100));//5

//How to find maximum no
console.log(Math.max(5,12,78,56,100));//100

//How to generate random number
//Math.random()

let randomNum = Math.random();//Bydefault,It generates random number between 0 to 1
//console.log(randomNum);

//We can generate random number between 1 to 6
//let start = 1;
//let end = 6;

//let randomNum = Math.floor(Math.random()*(end - start + 1))+start;
//console.log(randomNums);

//let start = 5;
//let end = 10;

//let randomNums = Math.floor(Math.random() *(6))+5;
//console.log(randomNums);


let start = 25;
let end = 50;

let randomNums = Math.floor(Math.random()*(end-start+1))+start;
console.log(randomNums);



