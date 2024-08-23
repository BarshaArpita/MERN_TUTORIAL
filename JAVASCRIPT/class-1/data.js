//null data types :-
//----Null is a datatype to set the value "null"
//----It is "not empty"
 
//How to define

let value = null;
console.log(value);//Output : null


//Undefined :-
//----The value is empty
//----The error will show you undefined

//How to define

let result;
console.log(result);

//bigInt:-
//----bigInt is a new datatypes in java script.
//----That can store integers of any sizes
//----It is used to store too large or too small integers.

//How to define

let bigInt = 100000000000000000000000000000000000000000000000000000000000000000;
console.log(bigInt); //Output:1e+65


//Symbol:-
//Symbol is a primitive datatype in javascript that is used to create unique identifiers for objects.

//How to define
let symbol1 = Symbol("abc");
let symbol2 = Symbol("xyz");
console.log(symbol1); 
console.log(symbol2);




//Nan :
//Nan is a spacial value that represents an invalid or Unreliable result in a mathmatical operation.
//It is often used to represent a value that is not a number.

// How to define
let output = 5 / 0;
console.log(output);//NaN(Not a Number)

//Boolean :
//Boolean is a primitive data type in javascript that can have one of two values: true or false.

//How to define
let isMarried = true;
console.log(isMarried);//Output: true

let isSingle = false;
console.log(isSingle);//Output:false

//String :
//String is a primitive datatype in javascript that represent a set of characters.

//How to define
let name = "Arpita";
let age =22;
console.log(name);

let sentence = "My name is";
console.log(sentence,name,age);
console.log(sentence+name+age);//This is not the right way

//To print
console.log("My age is","23", age, 10+2);

console.log(`My name is ${name},My age is ${age} and i live in bbsr.`);