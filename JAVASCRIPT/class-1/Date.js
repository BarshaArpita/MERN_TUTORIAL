//Date in js :
let date = new Date();
console.log(date); //2024-08-13T05:21:14.864Z

//convert to date
//date.toDateString()
console.log(date.toDateString());//Tue Aug 13 2024

//COonvert date to local time
console.log(date.toLocaleString());//13/8/2024, 10:57:02 am

//Custom date
//new Date("MM-DD-YYYY")
let myCustomDate = new Date("08-21-2024");
console.log(myCustomDate); //2024-08-20T18:30:00.000Z
//get date
console.log(myCustomDate.getDate());//21
//get month
console.log(myCustomDate.getMonth()+1); //8  //Coz it's indexing starts from "zero" in Javascript
//get year
console.log(myCustomDate.getFullYear());//2024

//How to find time
console.log(new Date().toTimeString());//11:20:56 GMT+0530 (India Standard Time)
console.log(new Date().getMinutes());//20
console.log(new Date().getHours());//11
console.log(new Date().getSeconds());//56



//Truthy Value : true,non-zero,non-empty string("Barsha"),object({})
//Falsy value :false, 0 , -0 , empty-string(""), null,  undefined, NaN