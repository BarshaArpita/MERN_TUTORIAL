//De-Structure :
//De-structuring is a process to extract the values of an array and object and re-assign them into a new variables.
//It is a shorthand way to assign the values of an array or object to variables.
//it is used to assign the values of an array or object to variables in a more readable and efficient way.

//Examples:
//1. De-structuring an array:
 let names = ["Arpita","Pramod","Barsha","Akash"];
// let [name1,name2,name3,name4] = names;
// console.log(name1); //output:Arpita

//Skipping elements:
let [,,name3,name4] = names;
//console.log(name3); //Output : Barsha

//Modifying elements: 
// console.log((name4="Ayush"));
// console.log((names[3]=name3));
// console.log((name4));//output : Ayush

//2. De-structuring an object :
let person = {
    name: "Arpita",
    age: 23,
    occupation:"software devloper",
    address: {
        city:"Bhubaneswar",
        state:"odisha",
        country:"India",
    },
    education: {
        Degree: "MCA",
        Branch: "CSE",
    },
};

// console.log(person.name);//Arpita
//console.log(person["age"]);//23

//de-structuring :
let{name,age,occupation,address,education} = person;
// console.log(name);//Arpita
//console.log(age);//23
//console.log(occupation);//software devloper

//de-structuring :
let{city,state,country} = person.address;
// console.log(state);//odisha
// console.log(country);//India
// console.log(city);//Bhubaneswar


//de-structuring :
let{Branch,Degree} = person.education;
// console.log(Branch);//CSE
//console.log(Degree);//MCA

//Spread Operator:
//The Spread operator is used to spread the elements of an array or the props(properties) of an object into 
//another array,object or function arguments.
//it is denoted by three dots(...) in javascript.
//Spread operator is used to create a copy of an array or object.
//It is used to merge two or more arrays or objects into a single array or object.
//It is used to pass a variable number of arguments to a function.
//It is used  to convert an array to a comma-separated string.
//It is used to convert an array to an object.
//It is used to convert an array to an array.

//Examples :
//1.Creating a copy of an array :
let arr1 = [1,2,3,4,5];
let arr2 =[...arr1];
// console.log(arr2);//[ 1, 2, 3, 4, 5 ]

//2.Merging two arrays:
let arr3 = [1,2,3];
let arr4 = [4,5,6];
let arr5 = [...arr3,...arr4];
// console.log(arr5);//[ 1, 2, 3, 4, 5, 6 ]

//Object Cloning :
let obj1 = {name:"Barsha",Age:23};
let obj2 = {...obj1};
// console.log(obj2);//{ name: 'Barsha', Age: 23 }

//Merging Object :
let obj3 = {name:"Barsha",Age:23};
let obj4 = {occupation:"software devloper",address:"bhubaneswar"};
let obj5 = {...obj3,...obj4};
// console.log(obj5); // output: {
   // name: 'Barsha',
   // Age: 23,
   // occupation: 'software devloper',
   // address: 'bhubaneswar'
 // }

 //Rest Operator:
 //The rest operator is used to get the rest of the elements of an array or the rest of 
 //the properties of an object into a single  array or object.
 //It is denoted by three dots(...)in javascript.
 //It is used to pass a variable number of arguments to a function.
 //It is used to get the rest of the elements of an array or the rest of the properties 
 //of an object into a single array or object.
 //It is used to convert an array to an object.
 //It is used to convert an object to an array.
 //It is used to get the rest of the elements of an array or the rest of the properties
 //of  an object into a single array or object.

 //Examples :
 // 1. Getting the rest of the elements of an array :
//  let [first,...rest] = [1,2,3,4,5,6,7,8,9];
//  console.log(first);//1
//  console.log(rest);//[2,3,4,5,6,7,8,9]
  
// 2. Getting the rest of the properties of an object :
let{x,...rest} = {x:1,y:2,z:3,w:4};
console.log(x);//1
console.log(rest);//{ y: 2, z: 3, w: 4 }

 
 






















