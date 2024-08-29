//Iteration :

const { log } = require("console");

//What are loops :
//Loops are used to execute a block of code repeatedly for a specified number of times .

//Types :
//1.For Loop
//2.While Loop
//3.Do-While Loop

//for Loop :
//The for Loop is used to execute a block of code repeatedly for a specified number of times.
//It consists of three parts: initialization,condition, and increment/decrement.
//The initialization part is used to initialize the loop counter.
//The condtion part is used to check whether the loop should continue or not.
//The increment/decrement part is used to increment or decrement the loop counter.

//Syntax :
//for(initialization;condition;increment/decrement){
//code to be executed
//}

//Example :
//Print your name 5 times.
// for(let i=0;i<5;i++){
//false value won't execute
//console.log("My name is Arpita")
// }

//output :
// My name is Arpita
// My name is Arpita
// My name is Arpita
// My name is Arpita
// My name is Arpita

//While Loop :
//The while loop is used to execute a block of code repeatedly while a specified conditionmis true.
//It consists of two parts: condition and code to be executed.
//The condition part is used to check whether the loop shouldcontinue or not.
//The condition part is used to check whether the loop should contine or not.
//Syntax:
//while(condition){
//code to be executed
//}

//Example:
//print your name 5 times.
// let i =0;
// while(i < 5);{
//false value won't execute
// console.log(" My name is Arpita");
// i++
// }

//Output :
// My name is Arpita
// My name is Arpita
// My name is Arpita
// My name is Arpita
// My name is Arpita

//Do-While logo :
//The do-while logo is used to execute a block of code repeatedly while a specified condition is
//true.It consists of two parts: code to be executed and condition.

//Syntax :
//do {
//code to be executed
//}
//While (condition):

//Example :
//Print your name 5 times.
// do{
// console.log("My name is Arpita");
// }while(i<5);

//Output :
// My name is Arpita
// My name is Arpita
// My name is Arpita
// My name is Arpita
// My name is Arpita

//Task-1:
//Write a for loop that prints the numbers from 1 to 10.
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//write a while loop that prints the numbers from 1 to 10.
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//write a do while loop that prints the numbers fro 1 to 10.
// let i=1;
// do{
// console.log(i)
// i++;
// }while(i<=10)

//

//Task-2:
//Write a for loop that prints the numbers from 10 to 1.
//for(i=10;i>=1;i--){
//console.log(i)
//}

//write a while loop that prints the numbers from 10 to 1.
// let i = 10;
// while (i>=1){
// console.log(i);
//  i--;

// }

//write a  do-while loop that prints the numbers from 10 to 1.
// let i = 10;
// do{
//     console.log(i)
// i--
// }while(i>=1)

//Task-3:
//write a for-loop to print the 10 random number for 10 times.
let start = 1;
let end = 10;
for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * (end - start + 1)) + start);
}

//write a for-loop to print 5 different time-zone.

for (let i=0; i<5; i++){
    let date = new Date();
    console.log(date);
    
}

