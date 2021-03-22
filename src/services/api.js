const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/"

// sort of like a middleware for all the reqs to check if there's any error
// by checking if res.ok is actually OK.
const handleErrors = (res) => {
  if (!res.ok) throw new Error("There was an error fetching the data.")
  return res
}

export const getAllCat = () => {
  const fullUrl = baseUrl + "list.php?c=list";
  return fetch(fullUrl)
    .then(handleErrors)
    .then(res => {
      res.json()
    })
}