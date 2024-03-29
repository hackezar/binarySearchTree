import _ from "lodash";
import "./style.css";

import { mergeSort, removeDuplicates } from "./mergeSort";
import { isPBT, insert, inorder} from "./bst";
import { list } from "./data";
import { prettyPrint } from "./prettyPrint";

// Driver Code
let size = list.length
let root = null

// Merge the array into numerical order
let array = mergeSort(list);

// Remove duplicates
removeDuplicates(array);

for (let i=0; i<size; i++)
  root = insert(root, array[i]);

inorder(root);
console.log(array);
console.log(root);
prettyPrint(root);

