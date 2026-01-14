let unique = [];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];
for (let num of arr) {
  if (!unique.includes(num)) unique.push(num);
}
console.log(unique)