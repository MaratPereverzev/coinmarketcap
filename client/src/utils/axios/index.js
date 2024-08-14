const objectToQuery = (obj) => {
  const keys = Object.keys(obj);

  let query = keys
    .map((key) => {
      if (obj[key] !== "" && obj[key] !== "undefined" && !!obj[key])
        return `${key}=${obj[key]}`;
      return "";
    })
    .filter((queries) => !!queries)
    .join("&");

  if (query.length > 0) return "?" + query;
  return "";
};
export { objectToQuery };
