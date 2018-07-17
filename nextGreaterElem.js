let input = [13, 7, 6, 12];//[4,5,2,25];
let len =  input.length;
let stack = [];
stack.push(input[0]);
i=1;
while(i<len){
    let next = input[i];

    if(!isEmpty()){
        let top = peek();
        while(top !== null && top < next){
            console.log(stack.pop() + "-->"+ next);
            top = peek();
        }
        stack.push(next);
    }
    i+=1;
}

while(!isEmpty()){
    console.log(stack.pop() + "-->"+  -1);
}
//console.log(stack);

function isEmpty(){
    return ((stack.length ===0 ) ? true:false);
}

function peek(){
    if(!isEmpty()){
        return stack[stack.length-1];
    }

    return null;
}