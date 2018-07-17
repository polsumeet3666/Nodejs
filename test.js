var arr = [1, 1, 2, 2, 2, 2, 3];

var {BinarySearch} = require('./searchUtil');
let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log('enter the number ');
rl.on('line',line => {
    let key = parseInt(line);
    countFrequency(key);
});

function countFrequency(key){
    let index=  BinarySearch(arr,0,arr.length,key);
    //console.log(index);
    let left = index-1;
    let right = index +1;
    let count =1;
    while(arr[left]== key){
        left -=1;
        count +=1;
    }
    while(arr[right]== key){
        right +=1;
        count +=1;
    }
    console.log(count);
}