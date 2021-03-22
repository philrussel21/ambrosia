const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

// sort of like a middleware for all the reqs to check if there's any error
// by checking if res.ok is actually OK.
const handleErrors = (res) => {
  if (!res.ok) throw new Error("There was an error fetching the data.");
  return res;
};

export const getAllCat = () => {
  const fullUrl = baseUrl + "list.php?c=list";
  return fetch(fullUrl)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};

export const getDrinksFromCat = (cat) => {
  const fullUrl = baseUrl + "filter.php?c=" + cat;
  return fetch(fullUrl)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};

export const getAllIng = () => {
  const fullUrl = baseUrl + "list.php?i=list";
  return fetch(fullUrl)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};

export const getDrinksFromIng = (ing) => {
  const fullUrl = baseUrl + "filter.php?i=" + ing;
  return fetch(fullUrl)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};

export const getDrinkFromId = (id) => {
  const fullUrl = baseUrl + "lookup.php?i=" + id;
  return fetch(fullUrl)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};