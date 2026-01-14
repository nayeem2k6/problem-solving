
let str = ["hello", "world", "javascript"];
let result = [];
for (let word of str) {
  result.push(word[0].toUpperCase() + word.slice(1));
}
console.log(result);
