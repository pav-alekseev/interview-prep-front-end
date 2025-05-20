class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  if (!tree) {
    return 0;
  }

  let max = 0;
  
  const iter = (node) => {
    if (!node) {
      return 0;
    }

    const leftDiameter = iter(node.left);
    const rightDiameter = iter(node.right);

    max = Math.max(leftDiameter + rightDiameter, max);

    return Math.max(leftDiameter + 1, rightDiameter + 1);
  }

  return Math.max(iter(tree.left) + iter(tree.right), max);
}
