import { mergeSort, removeDuplicates } from "./mergeSort";
import { isBalanced, insertNode, rebalance } from "./bst";
import { Tree, Node } from "./bst";
import { inOrder, preOrder, postOrder } from "./orders";
import { prettyPrint } from "./prettyPrint";

export function addDriverButton() {
    let button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.addEventListener('click', driverScript);
    button.innerText = "Driver Script";
    document.body.appendChild(button);
}

export function getRandomArbitrary(min, max) {
    let num = Math.random() * (max - min) + min;
    num = Math.round(num);
    return num;
}

export function driverScript() {
    // Size of the number of data nodes
    let treeSize = 50;
    let array = [];
    // Generate random numbers for the data
    for (let i=0; i<treeSize; i++) {
        array.push(getRandomArbitrary(0, 100));
    }
    // sort the array in numerical order
    array = mergeSort(array);
    // Remove any duplicate numbers just in case
    removeDuplicates(array);
    console.log(array);
    let start = 0;
    let end = array.length - 1;
    // 1. Make a new tree with the data
    let tree = new Tree(array, start, end)
    console.log(tree);
    // 2. Check if the tree is a balanced tree and respond accordingly
    function balanced(root){
    if (isBalanced(root) == true)
        console.log('Congrats, The tree is balanced');
    else {
        console.log('The tree is NOT balanced');
        }
    }
    balanced(tree.root);
    // 3. Print out all elements in pre, post and in order
    console.log(inOrder(tree.root));
    console.log(preOrder(tree.root));
    console.log(postOrder(tree.root));

    // 4. Unbalance the tree by addding several numbers greater than 100
    insertNode(101, tree.root);
    insertNode(111, tree.root);
    insertNode(150, tree.root);
    prettyPrint(tree.root);

    // 5. Confirm treee is unbalanced
    balanced(tree.root);

    // 6. balance tree again
    tree = rebalance(tree.root);

    // 7. Confirm that the tree is balanced
    balanced(tree.root);

    // 8. print out all elements in pre, post, and in order
    console.log(preOrder(tree.root));
    console.log(postOrder(tree.root));
    console.log(inOrder(tree.root));
}
