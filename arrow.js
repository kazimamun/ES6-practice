function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

// another system
const tripleIt = function (num){
    return num * 3;
}
const result1 = tripleIt(5);
console.log(result1);

//smart system
const hellow = num => num * 4;
const result2 = hellow(5);
console.log(result2);

//for double or more parameter
const smartArrow = (x,y,z) => x + y - z;
const smartResult = smartArrow(1,4,3);
console.log(smartResult);

//for multiline function
const math = (x, y) => {
    const add = x + y;
    const dif = x - y;
    const result = add + dif;
    return result;
}
const mathVar = math(4, 3);
console.log(mathVar);