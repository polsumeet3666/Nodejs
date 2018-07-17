let input = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5];
let frame = 3;
let queue = [];

console.log(isFrameFull());

function isFrameFull(){
    return (queue.length == frame);
}

function isInMem(page){
    let len = queue.length;
    for(let i=0;i<len;i+=1){
        if (page == queue[i]){
            return true;
        }
    }
    return false;
}

let pageFault = 0;
input.forEach(page => {
    if(!isFrameFull()){
        queue.push(page);
        pageFault +=1;
    }
    else if (isInMem(page)){
        queue.shift();
        queue.push(page);
    }
    else {
        pageFault +=1;
        queue.shift();
        queue.push(page);
    }
    console.log(queue);
});
console.log(`page fault : ${pageFault}`);