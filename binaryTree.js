class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this.root.value;
        }
        const iter = cur => {
            if (value < cur.value) {
                return cur.left ? iter(cur.left) : cur.left = node;
            } else {
                return cur.right ? iter(cur.right) : cur.right = node;
            }
        };
        iter(this.root)
    }

    lookup(value) {
        const iter = node => {
            if (node.value === value) {
                return node.value;
            } else if (node.value > value) {
                return iter(node.left)
            } else {
                return iter(node.right)
            }
        };
        return iter(this.root)
    }

    // remove
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(170));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}







