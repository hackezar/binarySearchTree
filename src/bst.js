

// Structure of the Node of Binary tree
// with count of Children nodes in
import { prettyPrint } from "./prettyPrint";
import { last } from "lodash";

// left sub-tree and right sub-tree.
export class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array, start, end) {
    this.root = createBST(array, start, end); 
  }
}

export function insertRoot(data) {
  let node = new Node(data)
    let root = new Tree(node);
    return root;
}

export function createTree(array) {
  let root;
  let half = Math.ceil(array.length/2); 
  let left = array.splice(0, half);
  let right = array;
  if (left.length > right.length) {
    root = insertRoot(left[left.length - 1]);
    array = updateArray(left, right);
    return [root, array];
   } 
}

export function updateArray(left, right) {
  left.splice((left.length - 1), 1);
  let array = left.concat(right);
  return array;
}

function insert(value, node) {
  if (value < node.key) {
    if (node.left == none) {
      node.left == new Node(value);
    } else {
      console.log('going left');
      insert(value, node.left);
    }
  } else {
    console.log('going right');
    insert(value, node.right);
  }
}

export function createBST(array, start, end) {
  if (start > end) 
    return null;
  let mid = Math.round((start + end) / 2);

  let node = new Node(array[mid]);
  node.left = createBST(array, start, mid-1);
  node.right = createBST(array, mid+1, end);
  return node;
}


 
