/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const result = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (!arg) {
      continue;
    }
    
    if (Array.isArray(arg)) {
      result.push(classNames(...arg));
      continue;
    }

    if (typeof arg === 'object') {
      const entries = Object.entries(arg);

      for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i];

        if (value) {
          result.push(key);
        } 
      }

      continue;
    }

    result.push(arg);
  }

  return result.join(' ');
}
