
export const alphaSort = (arr) => {
  arr.sort(function (a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });
  return arr;
};