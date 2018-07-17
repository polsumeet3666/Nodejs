function binarySearch(arr,low,high,key){
    //console.log('here');
    //console.log(`l= ${low}  h=${high}`)
    if (high >= low){
        mid = low + Math.floor((high-low)/2);
        //console.log(`l= ${low} m=${mid} h=${high}`)
        if (arr[mid] === key){
            return mid;
        }

        if (arr[mid] > key){
            return binarySearch(arr,low,mid-1,key);
        }
        else {
            return binarySearch(arr,mid+1,high,key);
        }

    }

    return -1;
}


function interpolationSearch(arr,low,high,key){
    //console.log(`${low <= high}`);
    //console.log(`${key >= arr[low]}`) 
    //console.log(`${key <= arr[high]}`);
    while (low <= high && key >= arr[low] && key <= arr[high]){

        let pos = low + Math.floor(((key-arr[low])* (high-low) )/(arr[high]-arr[low]));
      //  console.log(pos);
        if (arr[pos] === key){
            return pos;
        }

        if (arr[pos]>key){
            high = pos-1;
        }
        else {
            low = pos+1;
        }
    }
    return -1;
}

function exponentialSearch(arr,size,key) {

    if (arr[0] === key)
        return 0;

    let i =1 ;
    while(i<size && arr[i]<=key){
        i *=2;
    }
    //console.log(`exp- ${i/2}`) ;
    return binarySearch(arr,Math.floor(i/2),Math.min(i,size),key);   
}
exports.BinarySearch = binarySearch;
exports.InterpolationSearch = interpolationSearch;
exports.ExponentialSearch = exponentialSearch;