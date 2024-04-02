export function inOrder (root, result = [], callback) {
if (!root)
    return
if (callback == root.key)
    return root
inOrder(root.left, result);
result.push(root.key);
inOrder(root.right, result);
return result;
};

export function preOrder(root, result = [], callback) {
    if (!root)
        return
    result.push(root.key);
    preOrder(root.left, result);
    preOrder(root.right, result);
    return result;
}

export function postOrder(root, result=[], callback) {
    if (!root)
        return
    inOrder(root.left, result);
    inOrder(root.right, result);
    result.push(root.key);
    return result;
}