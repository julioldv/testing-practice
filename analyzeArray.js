function analyzeArray(array) {
  const length = array.length;

  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const average = sum / length;

  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length,
  };
}

export { analyzeArray };