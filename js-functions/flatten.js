/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  if (!Array.isArray(value)) {
    return [value];
  }

  const result = [];

  for (let i = 0; i < value.length; i++) {
    const item = value[i];

    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      result.push(...flatten(item));
    }
  }

  return result;
}
