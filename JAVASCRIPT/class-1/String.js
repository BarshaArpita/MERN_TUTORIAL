//String:

let first_name = "pramod";
let middle_name = "kumar";
let last_name = "Jena";

let sentence = "He is a good boy";

// "" --> Empty string / no space
 
// "" + "" --> Concatenation of two strings

// "" --> Space

//Traditional way

//console.log(first_name+ "" +middle_name+ "" +last_name);  //cocatenation method

//New line  "\n"
console.log(first_name+ "\n" +middle_name+ "\n" +last_name);

//console.log("*");
//console.log("**");
//console.log("***");
//console.log("****");

console.log("*" + "\n" + "**"+ "\n" + "***" + "\n" + "****");

//charAt()
//It returns the character at the specified index in a string
//It is 0 based index

console.log(sentence.charAt(10));

//Uppercase
//It converts a string into uppercase
console.log(sentence.toUpperCase()); //HE IS A GOOD BOY
console.log(sentence.toLowerCase()); //he is a good boy