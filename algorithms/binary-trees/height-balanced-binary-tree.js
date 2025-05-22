class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  let balanced = true;
  
  const getHeight = (node) => {
    if (!node) {
      return 0;
    }

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

  getHeight(tree);

  return balanced;
}
