var root = null;

//single node
class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        return this;
    }
};

//tree
class Tree {
    constructor(){
        this.root =null;
        return this;
    }
}

//insert node 
Tree.prototype.insertNode = function(node){
    if(this.root == null){
        console.log(`root is null`);
        this.root = node;
    }
    else {
        let temp = this.root;
        
        console.log(temp);
        while(temp !== null && ( temp.left !== null || temp.right !== null)){
            console.log(`${node.data}  ${temp.data}`);
            if(node.data < temp.data){
               if (temp.left !== null)
                    temp = temp.left;
                else
                    break;    
            }
            else {
                if (temp.right !== null)
                    temp = temp.right;
                else
                    break; ;
            }
        }
        if(node.data < temp.data){
            temp.left = node;
            console.log(`inserted at left of ${temp.data}`);
        }
        else {
            temp.right = node;
            console.log(`inserted at right of ${temp.data}`);
        }
    }
}

//inorder traversal
Tree.prototype.inorder = function(node){
    
    if (node == null)
        return;
    this.inorder(node.left);
    process.stdout.write(node.data+",");
    this.inorder(node.right)    

}

// single instance of tree
let bt = new Tree();

// code to create tree from user input
/*

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    if (line == "exit")
        process.exit(0);
    else if (line == "print")
        bt.inorder(bt.root);
    else {

        let node = new Node(parseInt(line));
        // console.log(root);
        // insertNode(node, root);
        // console.log(root);

        bt.insertNode(node);
    }

});
*/

let n = new Node(10);
bt.root = n;
n.left = new Node(5);
n.right = new Node(15);

n.left.left = new Node(2);
n.left.right = new Node(6);

n.right.left = new Node(12);
n.right.right = new Node(17);
n.right.right.left = new Node(16);

bt.inorder(bt.root);
console.log();

//bfs / level traversal
Tree.prototype.bfs = function (){
    let temp = bt.root;
    let queue = [];

    if(temp == null)
        return;
    else {
        queue.push(temp);

        while(queue.length !== 0){
            let e = queue.shift();
            
            process.stdout.write(e.data + ",");
            if (e.left !== null)
                queue.push(e.left);

            if(e.right !== null)
                queue.push(e.right);
                
            //console.log();    
        }

    }    
}

bt.bfs();

console.log();

// height of tree
Tree.prototype.height = function(node){
    
    if(node == null)
        return 0;
    else {
        let left =0 ,right = 0;
        left = this.height(node.left);
        right = this.height(node.right);

        if(left > right)
            return left +1;
        else 
            return right +1;    
    }    
}
console.log(bt.height(bt.root));

// mirror a tree
Tree.prototype.mirror = function(node){

    if (node == null)
        return node;
    
    let left = this.mirror(node.left);
    let right = this.mirror(node.right);


    let temp  = node.left;
    node.left = node.right;
    node.right = temp;

    return node;
}

bt.inorder(bt.root);
console.log();
bt.mirror(bt.root);
bt.inorder(bt.root);