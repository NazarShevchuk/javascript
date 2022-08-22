function filterBy(array, type) {
  return array.reduce((res, currentItem) => {
    if (typeof currentItem != type) {
      res.push(currentItem);
    }
    return res;
  }, []);
}

console.log(filterBy(["hello", "world", 23, "23", null], "string"));
