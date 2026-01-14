let arr = [3,7,9,5];
let max = arr[0];
for (let num of arr){
    if(num > max) max = num;
}
console.log(max)