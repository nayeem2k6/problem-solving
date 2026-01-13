let evens = [];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of arr) {
  if (number % 2 === 0) evens.push(number);
}
console.log(evens);
