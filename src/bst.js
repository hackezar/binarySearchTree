

// Structure of the Node of Binary tree
// with count of Children nodes in
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

// Function to check whether the given
// Binary tree is a perfect binary tree
// using the no. of nodes in tree.
export function isPBT(count){
 
  count = count + 1

  // Loop to check the count is in
  // the form of 2^(n-1)
  while (count % 2 == 0)
      count = count / 2

  if (count == 1)
      return true
  else
      return false
}
  

  export function insert(root, data){
    // Condition when root is null
    if (!root) {
      let n = new Node(data);
      return n;
    }
     // Condition when count of left sub-tree
  // Nodes is equal to the
  // right subtree nodes
  if (root.rcount == root.lcount){
    root.left = insert(root.left, data)
    root.lcount += 1;
  }

  // Condition when count of left sub-tree
  // nodes is greater than
  // the right sub-tree nodes
  else if (root.rcount < root.lcount) {
    // Condition when left Sub-tree is
    // Perfect Binary Tree then Insert
    // in right sub-tree.
    if (isPBT(root.lcount)) {
      root.right = insert(root.right, data);
      root.rcount += 1;
    }

    // If Left Sub-tree is not Perfect
    // Binary Tree then Insert in left sub-tree
    else {
      root.left = insert(root.left, data)
      root.lcount += 1;
    } 
  }
  return root;
}

// Function for inorder traversal of tree
export function inorder(root){
 
  if(root){
      inorder(root.left)
      document.write(root.data," ")
      inorder(root.right)
  }
}

 



