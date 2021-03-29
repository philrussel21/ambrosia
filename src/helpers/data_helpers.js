
export const alphaSort = (arr) => {
  arr.sort(function (a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });
  return arr;
};

export const extractIngsAndMeas = (obj) => {
  const ingWithMeas = [];
  let counter = 1;
  while (true) {
    const ingredient = obj[`strIngredient${counter}`];
    const measurement = obj[`strMeasure${counter}`];

    // null check
    if (!ingredient) break;

    const entry = { ingredient, measurement };
    ingWithMeas.push(entry);
    counter++;
  }
  return ingWithMeas;
};