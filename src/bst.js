import { mergeSort, removeDuplicates } from "./mergeSort";

export class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(node) {
    this.root = node; 
  }
}

export function buildTree(array) {  
  let half = Math.ceil(array.length/2);
  let left = array.splice(0, half);
  let right = array;
 if (left.length > right.length) {
    let tree = new Tree(new Node(left[left.length - 1]));
    left.splice(half, 1);
    tree.root.left = getNext(left);
    return tree;
 } else if (left.length < right.length || left.length == right.length) {
  return new Tree(new Node(right[0]));
 }
}

export function getNext(arr) {
  if (arr.length < 2) 
    return arr[0];
  
  
}