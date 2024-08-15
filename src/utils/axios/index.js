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

const prepareData = (arr, sort, recordsToShow) => {
  arr?.sort(function (item1, item2) {
    let result;
    if (sort.direction === false) {
      result = Number.parseFloat(item2[sort.sort] - item1[sort.sort]);
      if (isNaN(result))
        return item1[sort.sort].localeCompare(item2[sort.sort]);
      return result;
    } else {
      result = Number.parseFloat(item1[sort.sort] - item2[sort.sort]);
      if (isNaN(result))
        return item2[sort.sort].localeCompare(item1[sort.sort]);
      return result;
    }
  });
};
export { objectToQuery, prepareData };
