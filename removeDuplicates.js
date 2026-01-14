let unique = [];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];
for (let num of array) {
  if (!unique.includes(num)) unique.push(num);
}
console.log(unique)