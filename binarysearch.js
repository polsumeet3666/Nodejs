var {BinarySearch} = require('./searchUtil');

let arr = [1,2,3,4,5,6,7,8,9,10];


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
    let result = BinarySearch(arr,0,arr.length,ele);
    console.log(result);
    rl.close();
});


// function binarySearch(arr,low,high,key){
//     //console.log('here');
//     //console.log(`l= ${low}  h=${high}`)
//     if (high > low){
//         mid = low + Math.floor((high-low)/2);
//       //  console.log(`l= ${low} m=${mid} h=${high}`)
//         if (arr[mid] === key){
//             return mid;
//         }

//         if (arr[mid] > key){
//             return binarySearch(arr,low,mid-1,key);
//         }
//         else {
//             return binarySearch(arr,mid+1,high,key);
//         }

//     }

//     return -1;
    
    
// }

