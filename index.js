// //Topic1. Introduction to JavaScript
// //文字形
// console.log("Hello World");

// //Topic2.Data Types and Intro To Variables
// //数字形
// console.log(12.3);

// //Boolean形
// console.log(true);
// console.log(false);

// //assigning variable 
// aung_aung_name="Aung Aung";
// console.log(aung_aung_name);

// //undefined
// var a;
// console.log(a);

// //null
// var a = null;
// console.log(a);

// //Topic3 Variable Format & ES 6 Variable Syntaz
// //数字の計算
// var num1=12;
// var num2=13;
// console.log(num1+num2);

// //数字と文字の計算
// let name = "カンシート";
// let age = 12;
// let isSingle = true;
// console.log(name+"平成" + age + " は独身？ " + isSingle)

// const b = 12;
// //b=13//行26で固定値設定されますのでここにエラーが発生されます。

// //Topic4 Operator and Operator Procedure
// //+-*/ %
// console.log(2+3);
// console.log(2*3);
// console.log(3-1);
// console.log(6/2);
// console.log(6%2);

// //operator precedence
// let x = (20-7)*2/3;
// console.log(x);

// //number count plus or count minus
// let y = 1;
// y=y+1;
// y+=1
// console.log(y);

// //Topic5 if else
// var nme = "KhantSiThu";
// if(nme == "KhantSiThu" ){
//     console.log("It's true")
// }else{
//     console.log("It's false")
// }

// //Topic 6 conditions
// //truthy and falsy datatypes
// //1 false
// //2 0 (zero)
// //3 '' or ""(empty string)
// //4 null
// //5 undefined
// //6 Not a number (NaN)

// //1 false
// let c=false;
// if(c){
//     console.log(true);
// }else{
//     console.log(false);
// }

// //2 0
// let d=0;
// if(d){
//     console.log(true);
// }else{
//     console.log(false);
// }

// //3 '',""
// let e='',f="";
// if(e && f){
//     console.log(true);
// }else{
//     console.log(false);
// }

// //4 '',""
// let g=null
// if(g){
//     console.log(true);
// }else{
//     console.log(false);
// }

// //5 undefined
// let h
// if(h){
//     console.log(true);
// }else{
//     console.log(false);
// }

// //6 Not a number(NaN)
// let i = 'A';
// if(i==10){
//     console.log("i is equal to 10");
// }else if(i<10){
//     console.log("i is less than 10");
// }else if(i>10){
//     console.log("i is greater than 10");
// }else{
//     console.log("i is not a number (NaN)");
// }


//Topic 7 And Gate & Or Gate
//And gate
// let age=101;
// if(age>=1 && age<=18){
//     console.log("He is not an Adult..");
// }else if(age>=18 && age<=30){
//     console.log("He is a man...");
// }else if(age>=30 && age<= 60){
//     console.log("He is old man...");
// }else{
//     console.log("You are Fkking OLD...");
// }

// let x=11;
// if(x>10 || x <1){
//     console.log("true");
// }else{
//     console.log("false");
// }

//Topic 8 Function Declaration and Function expression
// function showName(){
//     alert("Khant Si Thu");
// }
// showName();

// helloWorld();
// //function declaration
// function helloWorld(){
//     console.log("HelloWorld")
// }


// //function expression
// var showAgeMsg = function(age){
//     console.log("Mg Mg age is "+age);
// }
// showAgeMsg(100);

// showNameAndAge("Khant",24);
// function showNameAndAge(name,age){
//     console.log("Name is :" + name + " Age is :" + age);
// }

//Topic9 Function Return and ES6 Function Syntax
//ES5 Syntax
// function helloWorldText(){
//     return "Hello Wolrd";
// }
// console.log(helloWorldText());

// function sum(num1,num2){
//     return num1+num2;
// }

// //sum(23,12);
// let result = sum(23,12);
// console.log(result);

//ES5 Syntax
// function helloWorld(){
//     console.log("HelloWorld")
// }

//ES6 Syntax
// let helloWorld=()=>{
//     console.log("hello world");
// }
// helloWorld();

//es5
// var showMGMGAge=function(age){
//     console.log("MG MG age is " + age);
// }

// es6
// let showMGMGAge=(age)=>{
//  console.log("MG MG age is " + age);
// }
// showMGMGAge(20);


// es6
// let showMGMGAge=(age)=> {
//     return "MG MG AGE is " + age;
// }

// let result=showMGMGAge(40);
// console.log(result);

//Topic10 Array Basic Concept and Syntax
// let fruits = ["orange","apple","banana"];
// let KSTBio = ["Khant SI Thu",24,false,"system engineer"];
// console.log(KSTBio);
// console.log(KSTBio[3])
// console.log(KSTBio.length)

//Topic11 JS Array Methods
// let myBio = [];
// let insertDataToMybioArray=(name,age,job)=>{
//      myBio.push(name);
//      myBio.push(age);
//      myBio.push(job);
//      myBio.pop(job);
// }
// insertDataToMybioArray("KhantSiThu",24,"System Engineer");

// console.log(myBio);

//Topic12 JS Default Functions
// let google = "ww3.google.com"
// let name = "Khant Si Thu";
// console.log(name.length);
// console.log(name.indexOf(" "));
// console.log(name.slice(0,5));
// console.log(google.includes("ww3"));

// let animal = "cat";
// let result = animal.toUpperCase();
// console.log(result);

// let number = "123.456"
// console.log(typeof number);
// let name = "MG MG";
// console.log(typeof name);
// let result=parseInt(number);
// console.log(typeof result);

//Topic13 Intorduction to For LOOP
//looping

// for(let i=1;i<=10;i++){
//     console.log("Hello World " + i);
// }

//Topic14 Show Data for Array with FOR Loop
// let emails = ["abc@gmail.com","def@gmail.com","ghi@gmail.com"];
// for (let i = 0; i< emails.length;i++){
//     console.log(emails[i]);
// }

//Topic15 Show Data for Array with WHILE Loop
let gmails = ["abc@gmail.com","def@gmail.com","ghi@gmail.com"];
let x = 0;
while(x < gmails.length){
    console.log(gmails[x]);
    x++;
}

