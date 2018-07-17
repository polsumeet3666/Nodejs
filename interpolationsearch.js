let arr = [1,2,3,4,5,6,7,8,9,10];
var {InterpolationSearch} = require('./searchUtil');

let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let ele = 0;
console.log('enter number to search');
rl.on('line',line =>{
    //console.log(line);
    ele = parseInt(line);
    let result = InterpolationSearch(arr,0,arr.length-1,ele);
    console.log(result);
    rl.close();
});

