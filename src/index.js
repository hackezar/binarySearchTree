import _ from "lodash";
import "./style.css";

import { mergeSort, removeDuplicates } from "./mergeSort";
import { insert, createTree, updateLeftSide} from "./bst";
import { list } from "./data";
import { prettyPrint } from "./prettyPrint";


// Merge the array into numerical order
let array = mergeSort(list);

// Remove duplicates
removeDuplicates(array);
console.log(array);
let root;
root = createTree(array);
array = root[1];
root = root[0];

updateLeftSide(root.root, array);
console.log(root);

//prettyPrint(root);
