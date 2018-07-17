function selectionSort(arr){
    
    let i = 0;
    while(i<arr.length){

        let smallestIndex =i;
        
        for(let j=i+1;j<arr.length;j+=1){
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j;
            }
        }
        //console.log(smallestIndex);
        let temp = arr[smallestIndex];
        arr[smallestIndex] = arr[i];
        arr[i]= temp;
        
        i+=1;
    }

    console.log(arr);
}

function bubbleSortAsc(arr){
    let size = arr.length;
    for(let i=0;i<size;i+=1){
        for(let j=0;j<size-1;j+=1){
            if (arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]= arr[j];
                arr[j]= temp;
            }
        }
    }
    console.log(arr);
}

function bubbleSortDesc(arr){
    let size = arr.length;
    for(let i=0;i<size;i+=1){
        for(let j=0;j<size-1;j+=1){
            if (arr[j]<arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]= arr[j];
                arr[j]= temp;
            }
        }
    }
    console.log(arr);
}

function insertionSort(arr){
    let n = arr.length;

    for(let i =1 ;i<n;++i){
        let key = arr[i];
        j=i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1]= arr[j];
            j-=1;
        }
        arr[j+1] = key;
       // console.log(arr);
    }
    console.log(arr);
}

function mergeSort(arr,l,r){
    //console.log(`l=${l} r=${r}`);
    if (r > l){
        let mid = l + Math.floor((r-l)/2);

        mergeSort(arr,l,mid);
        mergeSort(arr,mid+1,r);
        //console.log(`l=${l} m=${mid} r=${r}`);
        merge(arr,l,mid,r);
    }
    console.log(arr);
}
function merge(arr,l,m,r){
    //console.log(`${arr[l]}-${arr[m]}-${arr[r]}`);

    let left = [];
    let right = [];
    let lsize = m-l+1;
    let rsize = r-m;

    //copy in left
    for(let i=0;i<lsize;i+=1){
        left[i]= arr[l+i];
    }

    //copy in right
    //copy in left
    for(let i=0;i<rsize;i+=1){
        right[i]= arr[m+1+i];
    }
    // console.log(left);
    // console.log(right);

    let i=0,j=0;
    let k=l;

    while(i < lsize && j <rsize){
        if (left[i]<=  right[j]){
            arr[k]=left[i];
            i+=1;
        }
        else {
            arr[k]=right[j];
            j+=1;
        }
        k++;
    }

    while(i<lsize){
        arr[k]= left[i];
        i+=1;
        k+=1;
    }
    while(j<rsize){
        arr[k]= right[j];
        j+=1;
        k+=1;
    }

}
let input = [34,12,1,4,56,7,100];
//selectionSort(input);
//bubbleSortAsc(input);
//bubbleSortDesc(input);
//insertionSort(input);
mergeSort(input,0,input.length-1);