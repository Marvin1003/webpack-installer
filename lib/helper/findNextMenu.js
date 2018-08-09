module.exports = (str, arr) => {
  function findIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].input === str) {
        return arr[i].nested ? arr[i] : [];
      } else if (Array.isArray(arr[i].nested)) {
        const res = findIndex(arr[i].nested);
        if (res) return res;
      }
    }
  }
  return findIndex(arr);
};
