let prefixExp = "*+AB-CD";
let stack = [];
prefixExp = prefixExp.split("");
let len = prefixExp.length-1;
while(len >= 0){
    if (prefixExp[len].charCodeAt(0) >= 65 && prefixExp[len].charCodeAt(0) <= 90){
        stack.push(prefixExp[len]);
        len -=1;
    }
    else {
        let op1 = stack.pop();
        let op2 = stack.pop();
        let exp = op1 + prefixExp[len] + op2;
        stack.push(exp);
        len -=1;
    }   
}
console.log(`prefix ${prefixExp}  to infix ${stack}`);
stack = [];
 len = prefixExp.length-1;
while(len >= 0){
    if (prefixExp[len].charCodeAt(0) >= 65 && prefixExp[len].charCodeAt(0) <= 90){
        stack.push(prefixExp[len]);
        len -=1;
    }
    else {
        let op1 = stack.pop();
        let op2 = stack.pop();
        let exp = op1 + op2 + prefixExp[len]// + op2;
        stack.push(exp);
        len -=1;
    }   
}
console.log(`prefix ${prefixExp}  to postfix ${stack}`);
let postfixExp = stack.pop();
postfixExp = postfixExp.split("");
len = postfixExp.length;
stack = [];
let i = 0;
while(i<len){
    if (postfixExp[i].charCodeAt(0) >= 65 && postfixExp[i].charCodeAt(0) <= 90){
        stack.push(postfixExp[i]);
        i +=1;
    }
    else {
        let op1 = stack.pop();
        let op2 = stack.pop();
        let exp = postfixExp[i] +op2+op1;
        stack.push(exp);
        i +=1;
    }
}
console.log(`postfix ${postfixExp}  to prefix ${stack}`);

stack = [];
 i = 0;
while(i<len){
    if (postfixExp[i].charCodeAt(0) >= 65 && postfixExp[i].charCodeAt(0) <= 90){
        stack.push(postfixExp[i]);
        i +=1;
    }
    else {
        let op1 = stack.pop();
        let op2 = stack.pop();
        let exp = op2 +postfixExp[i] +op1;
        stack.push(exp);
        i +=1;
    }
}
console.log(`postfix ${postfixExp}  to infix ${stack}`);
