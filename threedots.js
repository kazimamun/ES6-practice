const first = ["rahim", "karim", "rafiq", "zakir", "arif"];
const second = ["noyon", "rony", "ali"];
const third = ["shorif", "shakhwat", "raihan"];
const conc = first.concat(second).concat(third).concat([4]);
const ex = [first, second, 4, third];
const result = [...first, ...second, 4, ...third] //smart way
console.log (conc);
console.log(ex);
console.log(result);