
let string = ["hello", "world", "javascript"];
let result = [];
for (let word of string) {
  result.push(word[0].toUpperCase() + word.slice(1));
}
console.log(result);
