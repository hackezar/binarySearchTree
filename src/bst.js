

// Structure of the Node of Binary tree
// with count of Children nodes in
import { prettyPrint } from "./prettyPrint";
import { last } from "lodash";

import { inOrder } from "./orders";
import { removeDuplicates } from "./mergeSort";

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

export function createBST(array, start, end) {
  if (start > end) 
    return null;
  let mid = Math.round((start + end) / 2);

  let node = new Node(array[mid]);
  node.left = createBST(array, start, mid-1);
  node.right = createBST(array, mid+1, end);
  return node;
}

export function insertNode(value, root) {
  if (value > root.key) {
    if (root.right == null)
      return root.right = new Node(value);
    insertNode(value, root.right);
  } else if (value <= root.key) {
      if (root.left == null)
        return root.left = new Node(value);
      insertNode(value, root.left)
  }
}

export function removeRelationship(root, value) {
  if (root.left == value) 
    return root.left == null;
  else if (root.right == value) 
    return root.right == null;
  else if (value < root.key)
    return removeRelationship(root.left)
  else if (value > root.key)
    return removeRelationship(root.right);
  
}


/*
If right subtree of node is NULL, then start from the root and use search-like technique. Do the following. 
Travel down the tree, if a node’s data is greater than root’s data then go right side, otherwise, go to left side.
*/

export function findInOrderSuccessor(value, ogRoot, node) {
  //If right subtree of node is not NULL, then succ lies in right subtree. Do the following. 
  //Go to right subtree and return the node with minimum key value in the right subtree.
  if (node.right != null)
    return minValue(node.right);

  let succ = null;

  // start from root and search for successor down the tree
  while (ogRoot != null) {
    if (value < ogRoot.data) {
      succ = root;
      root = root.left;
    } else if (value > ogRoot.data) {
      root = root.right;
    } else
        break;
  }
    return succ;
}

export function minValue(node) {
  let current = node;
  /* loop down to find the leftmost leaf */
  while (current.left != null) {
    current = current.left;
  }
  return current;
}

export function deleteNode(value, root) {
  let ogRoot = root;
  // If the key matches the value
  if (root.left.key == value) {
    // Condition for deleting a node with a single child
    if (root.left.left == null && root.left.right != null) {
      root.left.key = root.left.right.key;
      return root.left.right == null;
    } else if (root.left.left != null && root.left.right == null) {
      root.left.key = root.left.left.key;
      return root.left.left = null;
    } 
    // Condition for deleting a node with two children
    else if (root.left.left != null && root.left.right != null) {
      let sucessor = findInOrderSuccessor(value, ogRoot, root.left);
      root.left = sucessor;
      return root;
    }

    // Condition for deleting a node with no children
    root.left = null;
    return console.log(`Deleted: ${value}`);
  }
   
  else if (root.right.key == value) {
    // Condition for deleting a node with a single child
    if (root.right.left == null && root.right.right != null) {
      root.right.key = root.right.right.key;
      return root.right.right == null;
    } else if (root.right.left != null && root.right.right == null) {
      root.right.key = root.right.left.key;
      return root.right.left = null;
    }

    // Condition for deleting a node with two children
    else if (root.right.left != null && root.right.right != null) {
      let sucessor = findInOrderSuccessor(value, ogRoot, root.right);
      root.right = sucessor;
      return root;
    }

    root.right = null;
    return console.log(`Deleted: ${value}`);
  }
 
  else if (root.key < value)
    deleteNode(value, root.right);

  else if (root.key > value)
    deleteNode(value, root.left)

  console.log(root);
  return root;
}

export function findNode(value, root) {
  if (root.key < value)
    findNode(value, root.right);
  if (root.key > value)
    findNode(value, root.left);
  if (root.key == value) {
    return root;
  }
}

export function breadthFirstSearch(root, callback) {
  // Create a queue and a variable to storethe values of nodes visited
  let queue = [];
  let result = [];
  // Initiate a node variable to store the current node
  let node;
  // Push the root node to the queue
  queue.push(root)
  // Loop as long as there is anything in the queue
  while(queue.length) {
    // Deqeue a nodefrom the queue
    // push the visited node into the result
    node = queue.shift();
    result.push(node);
    // Optional callback to stop at
    if (node.key == callback)
      return node;
    // push children to the queue
    if (node.left)
      queue.push(node.left);
    if (node.right)
      queue.push(node.right);
  }
  // Return final traversed nodes array
  return result;
}

export function height(node, count = 0) {
  console.log(node);
  if (node.left == null && node.right == null)
    return console.log('Height: ' + count)
  if (node.left == null && node.right != null)
    height(node.right, count + 1);
  if (node.left != null && node.right == null)
    height(node.left, count + 1);
  else
    height(node.left, count + 1);
}

export function depthNode(node, root) {
  if (node.key > root.key) {
    node.count++;
    depthNode(node, root.right);
  }

  else if (node.key < root.key) {
    node.count++;
    depthNode(node, root.left);
  }

  else if (node.key == root.key)
    return node.count;
  return node.count;
}

export function isBalanced(root) {
  function getDepth(root) {
    if (root == null)
      return 0;
    else {
    // Get depth of each subtree
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);

    // use the larger one
    if (leftDepth > rightDepth)
      return (leftDepth + 1);
    else
      return (rightDepth + 1);
    }
  }

  let left = getDepth(root.left);
  let right = getDepth(root.right);
  
  // Make sure sub trees are balanced
  if (Math.abs(left - right) > 1)
    return false;
  else if (Math.abs(right - left) > 1)
    return false;
  else 
    return true;
}

export function rebalance(root) {
  let result = inOrder(root);
  let start = 0;
  let end = result.length - 1;
  let tree = new Tree(result, start, end);
  return tree;
}


 
