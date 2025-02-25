function add(a, b) {
  return a + b;
}
result1 = add(337, 338);
console.log(result);

function subtract(a, b) {
  return a - b;
}
result2 = subtract(268, 536);
console.log(result);

function multiply(a, b) {
  return a * b;
}
result3 = multiply(177182.5, 2);
console.log(result);

function divide(a, b) {
  return a / b;
}
result4 = divide(5.442176871, 2);
console.log(result);

function increment(n) {
  return n + 1;
}
result5 = increment(401);
console.log(result);

function decrement(n) {
  return n - 1;
}
result6 = decrement(605);
console.log(result);

function makeInt(n) {
  return parseInt(n, 10);
}
let value1 = "123";
let intValue = makeInt(value);
console.log(intValue);

function preserveDecimal(n) {
  return parseFloat(n);
}

let value2 = "1234.5678";
let parsedValue = preserveDecimal(value2);
console.log(parsedValue);
