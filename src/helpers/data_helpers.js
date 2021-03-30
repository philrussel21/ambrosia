
export const alphaSort = (arr) => {
  arr.sort(function (a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });
  return arr;
};

// Extracts ingredients and measurements from the drink obj
// and returns an array with each element representing an
// ingredient and appropriate measure
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

export const getStringData = (arr) => {
  const output = [];
  // Checks the first el of the array if
  // it consists of categories
  if (Object.keys(arr[0]).includes("strCategory")) {
    for (const cat of arr) {
      output.push(cat.strCategory);
    }
  }
  // if not category then it's ingredients
  else {
    for (const ing of arr) {
      output.push(ing.strIngredient1);
    }
  }

  return output;
};