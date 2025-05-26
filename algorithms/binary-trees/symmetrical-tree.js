function symmetricalTree(tree) {
  const leftStack = [tree.left];
  const rightStack = [tree.right];

  while (leftStack.length) {
    const left = leftStack.pop();
    const right = rightStack.pop();

    if (!left && !right) {
      continue;
    }

    if (!left || !right || left.value !== right.value) {
      return false;
    }

    leftStack.push(left.left);
    leftStack.push(left.right);
    rightStack.push(right.right);
    rightStack.push(right.left);
  }
  
  return true;
}
