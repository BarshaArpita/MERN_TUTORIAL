// Controls in Js

//Truthy Value : true,non-zero,non-empty string("Barsha"),object({})
//Falsy value :false, 0 , -0 , empty-string(""), null,  undefined, NaN

//Conditional :
//Statements that are perform different actions based on different condition used to make decesion in code.

//Types :
//If ,else if,else,switch,ternary operator.

//Syntax : if(){..}

// if (true) {
//     console.log("true");
// }else{
//     console.log("false");
// }

// if (false) {
//     console.log("true");
// }else{
//     console.log("false");
// }

// if ("") {
//     console.log("It is a true value");
// }else {
//     console.log("It is a false value")
// }

// if ("Barsha") {
//     console.log("true")
// }else{
//     console.log("false")
// }

// if ("10") {
//  console.log("true")
// }else{
//     console.log("false")
// }


//Task-1 :
//Write a program to check wheather you are an adult or minor.

// let myAge = 17;

// if(myAge >= 18) {
//     console.log("You are adult");
// } else {
//     console.log("you are a minor");
// }


// Task-2 :
//  let isMarried = true;
//  console.log(typeof isMarried);

//  if(isMarried){
//     console.log("you are allowed");
//  }else{
//     console.log("you are not allowed");
//  }

 // Task-3:
 //Write a program to check whether you are a eligible for a driving licence or not.

 //Eligibility criteria : age >= 18

 let age = 81;
 let male = true;

 if (age >= 18 && male) {
    //console.log(
    //"As you are adult hence you're eligible for driving licence and also you will get a chance to drive mercedes benz");
} else if (age >= 80) {
    //console.log("As you are older hence you're not eligible for driving licence" );
}else {
    // console.log("As you are minor hence you're not eligible for driving licence "); 
}

//Task-4 :
//write a program to check whether even or odd

let number = 0;

if (number %2 ==0){
   //console.log("The number is even");
}else {
   //console.log("The number is odd");
}

//Task-5 :
//write a program to check whether you are eligible for job or not 
//eligibility creteria : my marks >= 80 , 60-80

let myMarks = 80;

if (myMarks >= 80) {
//console.log("You are eligible for a job"); 
}else if (myMarks < 80 && myMarks >60) {
   //console.log("You are eligible for the next round");
}else{
   //console.log("You are not eligible for a job");
}

//Ternary Operator (?) :
//The ternary operator is a shorthand for a simple if/else statement.
//It consists of three parts: the condition,the value if the condition is true,and the 
//value if the condition is false.
//syntax : condition : condition ? value_if_false;

let isSingle = false;

isSingle;
// ? console.log("You are not allowed to club")
//. console.log("You are allowed to club");


let isMarried = false;

// isMarried ? console.log("Yes i am married") : console.log("No i am not married");

//Switch :
// The switch statement is used to perform different actions based on different conditions .
//It is used when we have to perform different actions based on different conditions.

//todo :

let day = 7 ; //statement 

switch (day) {
   case 0:
      console.log("Today is sunday");
      break;
      case 1:
       console.log("Today is monday");
      break; 
      case 2:
      console.log("Today is tuesday");
      break;
      case 3:
      console.log("Today is wednesday");
      break;
      case 4:
      console.log("Today is Thrusday");
      break;
      case 5:
      console.log("Today is friday");
      break;
      case 6:
      console.log("Today is Saturday");
      break;

      default:
     console.log("Invalid day");
     break;            
}





 