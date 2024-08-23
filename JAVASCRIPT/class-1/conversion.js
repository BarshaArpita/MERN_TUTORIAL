//Conversion :

let num1 = 100;
let num2 = 50;

console.log(typeof num1,typeof num2);

//Convert number to string :

let convert_num1 = String(num1);//converted
console.log(typeof convert_num1);  // string

//Without using inbuilt function

let convert_num2 = num2 + "";//converted
console.log(typeof convert_num2);

//Convert string to number :

let string = "100";
console.log(typeof string);//string

//Using inbuilt function

let convert_string = Number(string);
console.log(typeof convert_string);//number

//Without using inbuilt function

console.log(typeof +convert_string); //number


//  "/n" - it will take  you the next line