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

export function getNext(arr) {
  console.log(arr);
  if (arr.length < 2) 
    return arr[0];
  let half = Math.ceil(arr.length/2);
  let left = arr.splice(0, half);
  let right = arr;
  if (left.length > right.length)
    Tree.root.left = new Node(left[left.length - 1]);
  else if (left.length <= right.length)
    return new Node(right[0]);
  
}

export function buildTree(array) {  
  let half = Math.ceil(array.length/2);
  let left = array.splice(0, half);
  let right = array;
 if (left.length > right.length) {
    new Tree(new Node(left[left.length - 1]));
    left.splice(half - 1, 1);
    Tree.root.left = getNext(left);
    Tree.root.right = getNext(right);
    return Tree;
 } else if (left.length < right.length || left.length == right.length) {
  return new Tree(new Node(right[0]));
 }
}

