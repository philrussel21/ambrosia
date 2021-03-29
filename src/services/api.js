
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";


const getData = (url) => {
  return fetch(url)
    // sort of like a middleware for all the reqs to check if there's any error
    // by checking if res.ok is actually OK.
    .then(res => {
      if (!res.ok) throw new Error("There was an error fetching the data.");
      return res;
    })
    .then(res => {
      return res.json()
        .then(data => {
          return data;
        });
    });
};

export const getAllDrinks = () => {
  const promises = [];
  const nonAlcUrl = baseUrl + "filter.php?a=Non_Alcoholic";
  const alcUrl = baseUrl + "filter.php?a=Alcoholic";

  promises.push(getData(nonAlcUrl));
  promises.push(getData(alcUrl));
  return Promise.all(promises);
};

export const getAllCat = () => {
  const fullUrl = baseUrl + "list.php?c=list";
  // return fetch(fullUrl)
  //   .then(handleErrors)
  //   .then(res => {
  //     return res.json()
  //       .then(data => {
  //         return data;
  //       });
  //   });
  return getData(fullUrl);
};

export const getDrinksFromCat = (cat) => {
  const fullUrl = baseUrl + "filter.php?c=" + cat;
  return getData(fullUrl);
};

export const getAllIng = () => {
  const fullUrl = baseUrl + "list.php?i=list";
  return getData(fullUrl);

};

export const getDrinksFromIng = (ing) => {
  const fullUrl = baseUrl + "filter.php?i=" + ing;
  return getData(fullUrl);
};

export const getAllNonAlcDrinks = () => {
  const fullUrl = baseUrl + "filter.php?a=Non_Alcoholic";
  return getData(fullUrl);
};

export const getRandDrink = () => {
  const fullUrl = baseUrl + "random.php";
  return getData(fullUrl);
};

export const getDrinkFromId = (id) => {
  const fullUrl = baseUrl + "lookup.php?i=" + id;
  return getData(fullUrl);
};