

// Structure of the Node of Binary tree
// with count of Children nodes in

import { last } from "lodash";

// left sub-tree and right sub-tree.
export class Node {
  constructor(val) {
    this.key = val;
    this.rcount = 0,
    this.lcount = 0,
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(node) {
    this.root = node; 
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

export function updateLeftSide(root, array) {
  let half = Math.ceil(array.length/2); 
  array = array.splice(0, half);
  half = Math.ceil(array.length / 2);
  let left = array.splice(0, half)
  let right = array;
  
  if (left.length >= right.length) {
    if (left.length==0)
      return;
    root.left = new Node(left[left.length - 1]);
    left.splice(left.length - 1, 1);
    array = updateArray(left, right);
    updateLeftSide(root.left, array);
  } else if (left.length < right.length) {
    root.root.left = new Node(right[0]);
    right.splice(0, 1);
    array = updateArray(left, right);
    updateLeftSide(root.left, array)
  } 
}

 
