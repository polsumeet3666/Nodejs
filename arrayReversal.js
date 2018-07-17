var input = [5,6,7,1,2,3,4];
var d = 2;
var e = 3;


function findPivot(arr,low,high){
    
    if (high < low)
        return -1;
    
    if (high === low)
        return low;
    
        
    var mid = Math.floor((low+high)/2);

    if (mid < high && arr[mid] > arr[mid+1])
        return mid;
    
    if (mid > low && arr[mid] < arr[mid-1] ) 
        return mid-1;   

    if (arr[low] >= arr[mid])
        return findPivot(arr,low,mid-1);
    
    return findPivot(arr,mid+1,high);    
}

//[5,6,7,1,2,3,4];
function binarySearch(arr,low,high,elem){
    if (high < low)
    return -1;

    let mid = Math.floor((low+high)/2);

    console.log(`l=${low} h=${high} m=${mid}`)    

    if (arr[mid] == elem)
        return mid;

    if (arr[mid] > elem)
        return binarySearch(arr,low,mid-1,elem);
    else 
        return binarySearch(arr,mid+1,high,elem)        
}

function pivotBinarySearch(arr,e){
    let pivot = findPivot(arr,0,arr.length);
    console.log(`pivot - ${pivot}`);
    if (pivot == -1)
        return binarySearch(arr,0,arr.length,e);
    
    if (arr[pivot] == e)
        return pivot;
    
    if (arr[0] <= e)
        return binarySearch(arr,0,pivot-1,e);
    else    
        return binarySearch(arr,pivot+1,arr.length,e); 

       
}


console.log(pivotBinarySearch(input,3));