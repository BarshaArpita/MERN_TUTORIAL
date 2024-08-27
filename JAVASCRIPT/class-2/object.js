// Object :
// A Object is a collection of properties, where each property is defined as a key-value pair.
// The key is a string, and the value can be any type of data,including strings
// numbers, booleans, arrays, objects, and null.

// Syntax:

// Traditional method or object literal :

// let array = ["Arpita",25,"bbsr"];
//is it really meaning full ? ----> no

let object = { name :"Arpita",age : 25,city : "bbsr"};
//name:,age:,city: -----> key
//"Arpita",25,"bbsr" ----> value
// is it really meaning full ? -----> yes

//Task-1 :
// Create an object with the following properties : name,age,city,address.

let student = {
    name: "John",
    age: 30,
    city: "Bhubaneswar",
    address: { po: "RRL", pin: 751013,state:"odisha" },
  };

  console.log(student);
  
  // Constructor method:

  //syntax
//let object = new object(key,value);

let employee = new Object();
employee.name = "Arpita";
employee.age = "23";
employee.city = "Bbsr";
employee.occupation = "Devloper";
employee.address = {po:"pmi",pin:"754215",state:"Odisha"};

console.log(employee);

//Accessing Object :
//We can access the properties of an object using dot notation or bracket notation.

//dot notation :
//syntax : Object.key
//Example : employee.name
 
console.log(employee.name); //Arpita
console.log(employee.occupation); //Devloper

//bracket notation :
//syntax : object['key']
//example : employee['name']

console.log(employee["name"]);
console.log(employee["address"]);

//Modify object :
//we can modify the properties of an object using dot notation or bracket notation.
//we can also  add new properties to an object dot notation or bracket notation.

//dot notation
employee.name = "Barsha";
console.log(employee.name);

//bracket notation
employee["age"] = 25;
console.log(employee["age"]);






