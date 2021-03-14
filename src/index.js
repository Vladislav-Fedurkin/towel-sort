
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return !matrix
    ? []
    : matrix.reduce((acc, val, index) => index % 2 ? acc.concat(val.reverse()) : acc.concat(val), []);
}
