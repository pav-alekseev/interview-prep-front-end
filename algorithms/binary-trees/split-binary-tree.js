function splitBinaryTree(tree) {
  const iter = (node) => {
    if (!node) {
      return 0;
    }

    return node.value + iter(node.left) + iter(node.right);
  }

  const totalSum = tree.value + iter(tree.left) + iter(tree.right);
  let foundSplitTrees = false;
  
  if (totalSum % 2 !== 0) {
    return 0;
  }
  
  const findSubtree = (node) => {    
    if (foundSplitTrees) {
      return;
    }
    
    if (!node) {
      return 0;
    }

    const leftSum = findSubtree(node.left);
    const rightSum = findSubtree(node.right);

    if (leftSum === totalSum / 2 || rightSum === totalSum / 2) {
      foundSplitTrees = true;
      return;
    }

    return node.value + leftSum + rightSum;
  }

  findSubtree(tree);

  return foundSplitTrees ? totalSum / 2 : 0;
}
