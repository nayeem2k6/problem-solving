let evens = [];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of array) {
  if (number % 2 === 0) evens.push(number);
}
console.log(evens);
