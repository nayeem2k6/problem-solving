let array = [3,7,9,5];
let max = array[0];
for (let num of array){
    if(num > max) max = num;
}
console.log(max)