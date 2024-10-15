let score = false;

console.log(typeof score);

let valueInNumber = Number(score);  //Score will be converted from string to 'Number'
console.log(valueInNumber);
console.log(typeof(valueInNumber));

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 45;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));


// Conversions
// "33" => 33
// "32abc" => NaN
// true => 1 and false => 0

// 1 => true and 0 => false
// ""(empty string) => false and "abc" => true