/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
  let result = items.filter(item => !!item);

  if (!options) {
    return printItems(result);
  }

  if (options.unique) {
    result = [...new Set(result)];
  }

  if (options.sorted) {
    result.sort();
  }

  if (options.length > 0 && result.length > options.length) {
    const left = result.length - options.length;
    const chosenItems = result.slice(0, options.length);

    return printItems([...chosenItems, `${left} other${left > 1 ? 's' : ''}`]);
  }

  return printItems(result);
}

const printItems = (items) => {
  if (items.length === 1) {
    return items[0];
  }

  let result = [];

  for (let i = 0; i < items.length; i++) {
    if (i === items.length - 2) {
      result.push(`${items[i]} and`);
    } else if (i === items.length - 1) {
      result.push(items[i]);
    } else {
      result.push(`${items[i]},`);
    }
  }

  return result.join(' ');
}
