function adding (num1, num2){
    return num1+num2;
}
const addingVar = adding(3,4);
console.log(addingVar);
//if forgot to input 2 number then to ignor error.
//solution one
function plus (num1, num2){
    if (num2 == undefined){
        num2 = 0;
    }
    return num1+num2;
}
const add = plus(3);
console.log (add);

//example with problem (second solution)
function plus1 (num1, num2){
    num2 = num2 || 0; // here show if num2 is not defined or forgot to defined then num2 = 0
    return num1+num2;
}
const add1 = plus1(2);
console.log (add1);

//smart solution

function newP (num1, num2 = 0){ // here show if num2 is not defined or forgot to defined then num2 = 0
    return num1+num2;
}
const add2 = newP(2);
console.log (add2);