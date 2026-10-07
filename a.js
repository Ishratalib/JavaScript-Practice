// 1. While Loop
let count = 1;
let sum = 0;

while (count <= 5) {
  sum = sum + count;
  count++;
}

console.log("The sum of all numbers from 1 to 5 is " + sum);

// 2. Countdown
let countdown = [];
let count2 = 5;

while (count2 >= 1) {
  countdown.push(count2);
  count2--;
}

console.log("Countdown:", countdown);

// 3. For Loop
const numbers = [2, 4, 6];
const multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}

console.log(multipliedNumbers);

// 4. Function
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

console.log(makeTea("Green Tea"));

// 5. Arrow Function
const calculateTotal = (price, quantity) => price * quantity;

console.log(calculateTotal(5, 3));

// 6. Array Push
const citiesVisited = ["Pakistan", "Sydney"];
citiesVisited.push("Berlin");

console.log(citiesVisited);