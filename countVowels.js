let count = 0;
let vowels = "aeiouAEIOU";
let sentence= "itsbangladesh"
for (let letter of sentence){

    if(vowels.includes(letter)){
   count ++;
    }
}
console.log(count)