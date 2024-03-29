import _ from "lodash";
import "./style.css";

import { mergeSort, removeDuplicates } from "./mergeSort";
import { Node, Tree, buildTree } from "./bst";
import { list } from "./data";

// Merge the array into numerical order
let array = mergeSort(list);

// Remove duplicates
removeDuplicates(array);

// Build the tree with the list
let tree = (buildTree(array));
console.log(tree);

