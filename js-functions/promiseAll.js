/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (!iterable || iterable.length === 0) {
      resolve([]);
    }

    const result = {};

    iterable.forEach((elem, index) => {
      if (elem.then) {
        return elem.then((value) => {
          result[index] = value;

          if (Object.keys(result).length === iterable.length) {
            resolve(Object.values(result));
          } 
        }).catch(reject);
      }

      try {
        if (typeof elem === 'function') {
          result[index] = elem();
        } else {
          result[index] = elem;
        }

        if (Object.keys(result).length === iterable.length) {
          resolve(Object.values(result));
        } 
      } catch (error) {
        reject(error);
      }
    });
  });
}
