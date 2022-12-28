// console.log('wellcome')
let porcoutry=['Bangladess','India','Pakistan'];
let richcountry=[...porcoutry,'America','Canada'];
console.log(richcountry);
// add array without spread operator.
let num1=[2,3,4,5,6];
let num2=[10,20,30,40];
num1.push(num2);
console.log(num1);
// Rest parameter (Rest parameter is prefixed with three dots like(...))
function show(...numbers){
let sum=0;
for(let i of numbers){
    sum=sum+i;
}
console.log("summation="+sum);
}
show(10,20,30,40);