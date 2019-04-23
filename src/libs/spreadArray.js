const spreadArray = (array, amount) => {
  if (amount === 1 || array.length === 0) return [...array]; // to not effect original array
  let spreadedArray = Array.apply(null, new Array(amount)).map(() => []);
  for (let i = 0; i < array.length; i++) {
    spreadedArray[i % spreadedArray.length].push(array[i]);
  }
  return spreadedArray;
};

export default spreadArray;
