import _ from "lodash";
import "./style.css";

import { mergeSort, removeDuplicates } from "./mergeSort";
import { Node, Tree, buildTree } from "./bst";
import { list } from "./data";
import { prettyPrint } from "./prettyPrint";


// Merge the array into numerical order
let array = mergeSort(list);

// Remove duplicates
removeDuplicates(array);
console.log(array);
// Build the tree with the list
buildTree(array);
console.log(Tree);
//prettyPrint(tree.root);

