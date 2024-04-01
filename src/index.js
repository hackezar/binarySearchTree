import _ from "lodash";
import "./style.css";

import { mergeSort, removeDuplicates } from "./mergeSort";
import { insert, createTree, createBST} from "./bst";
import { list } from "./data";
import { prettyPrint } from "./prettyPrint";
import { Tree } from "./bst";


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

let tree = new Tree(array, start, end);
prettyPrint(tree.root);