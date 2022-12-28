// console.log('wellcome')
// let porcoutry=['Bangladess','India','Pakistan'];
// let richcountry=[...porcoutry,'America','Canada'];
// console.log(richcountry);
// // add array without spread operator.
// let num1=[2,3,4,5,6];
// let num2=[10,20,30,40];
// num1.push(num2);
// console.log(num1);
// // Rest parameter (Rest parameter is prefixed with three dots like(...))
// function show(...numbers){
// let sum=0;
// for(let i of numbers){
//     sum=sum+i;
// }
// console.log("summation="+sum);
// }
// show(10,20,30,40);
// // dymanic function (function are assained in a variable)
// var name=function(nameValue){
//     return nameValue;
// }
// console.log(name("Rakib"));
//  differnt method of declare variable
// 1. using let
// i)let keyword is assigned the block scope 
// ii) let cannot be re-declared.
// iii) can be reassinged a value


let name="Rakib";
name="Rahim";//Reasing...
console.log(name);
// let name="Takvir";// Re-declarealbe is not possible





// using const:-
// i)it connot be re-assigned a value
// ii)it is block scope
// iii)A constant cannot be re-declared
const a=5;
// a=110;// Re-assin is not possible.
console.log(a);


// using var:-
// let can be re-declared 
// can be reassigned a value
var nam="Rakib";
nam="Karim";//Reasing...
var nam= "Jadid";//Re-declareable.
console.log(nam);
var Mycountry=['Dhaka','Rangpur','Barishal','Khulna','Mymensing'];
for(let mycity of Mycountry){
    console.log(mycity);
}
// create object
var sohel={
    shirt:true,
    shirtColore:"offwhite",
    smile:true,swatter:true,
    swatterColor:"black"
}
console.log(sohel['shirtColore']);
// nested object 
let shoelPro={
    shirt:{
        color:"offwhite",
        quality:"Good",
        price:1600
    },
    swatter:{
        color:"Black",
        quality:"Good",
        price:2100

    },
    face:{
        similing:"always",
        chosma:"yes",
        teeth:"white big"
    }
}
console.log(shoelPro['face']['teeth']);
function subtraction(){
    return 10-5;
}
console.log(subtraction());
function add(a,b){
    let x=a;
    let y=b;
    let sum =x+y;
    return sum;
}
let result=add(20,50);
console.log(result);
let ressult2=add(20,20);
console.log(result)
// anonymous function
let mul=function(a,b){
    return a*b;
}
console.log(mul(20,10));
console.log(mul(10,10));
console.log(Object.keys(sohel));
console.log(Object.values(shoelPro));
console.log(Object.values(sohel));
// Arrow Function
let add2=(...x)=>{
    let sum=0;
    for(let a of x)
     sum=sum+a;
    
    return sum;

}
console.log(add2(2,3,4,5));
