import _ from "lodash";
import "./style.css";

import { mergeSort, removeDuplicates } from "./mergeSort";
import { insertNode, deleteNode, findNode, depthNode, levelOrder, breadthFirstSearch, height, isBalanced } from "./bst";
import { list } from "./data";
import { prettyPrint } from "./prettyPrint";
import { Tree } from "./bst";

import { inOrder, preOrder, postOrder } from "./orders";

let result = [];

// Merge the array into numerical order
let array = mergeSort(list);

// Remove duplicates
removeDuplicates(array);

/*
let root;
root = createTree(array);
array = root[1];
root = root[0];
*/
let start = 0;
let end = array.length - 1;

// Creates the binary search tree
let tree = new Tree(array, start, end);

console.log(tree);
// Pretty print is a fancy way to console log the data
prettyPrint(tree.root);

// 4. Write insert Value
insertNode(100, tree.root);
insertNode(69, tree.root);
insertNode(420, tree.root)
prettyPrint(tree.root);

deleteNode(5, tree.root);
deleteNode(3, tree.root);
deleteNode(324, tree.root);
console.log('Deleted');
prettyPrint(tree.root); 
console.log(tree.root);


// 5. Write a find value
findNode(67, tree.root);

// 6. Level order callback wuith optional callback input
breadthFirstSearch(tree.root, 23);

// 7. inOrder, preOrder, postOrder callback functions
console.log("Preorder traversal")
console.log(preOrder(tree.root));
console.log("Postorder traversal")
console.log(postOrder(tree.root));
console.log("Inorder traversal")
console.log(inOrder(tree.root));

// 8. Height Node
let node = breadthFirstSearch (tree.root, 67);
height(node);

// 9. Depth Node
node = breadthFirstSearch(tree.root, 7);
node.count = 0;
let depth = depthNode(node, tree.root);
console.log("Depth: ");
console.log(depth);

// 10, isBalanced function
console.log(isBalanced(tree.root));
