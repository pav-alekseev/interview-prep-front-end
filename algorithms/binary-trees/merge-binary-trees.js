class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function mergeBinaryTrees(tree1, tree2) {
  if (!tree1 && !tree2) {
    return tree1;
  }
  
  tree1.value += tree2.value;

  if (tree1.left && !tree2.left) {
    tree2.left = new BinaryTree(0);
  } else if (!tree1.left && tree2.left) {
    tree1.left = new BinaryTree(0);
  }

  mergeBinaryTrees(tree1.left, tree2.left);

  if (tree1.right && !tree2.right) {
    tree2.right = new BinaryTree(0);
  } else if (!tree1.right && tree2.right) {
    tree1.right = new BinaryTree(0);
  }

  mergeBinaryTrees(tree1.right, tree2.right);
  
  return tree1;
}
