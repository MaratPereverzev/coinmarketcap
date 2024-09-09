const objectToQuery = (obj: {
  [index: string | number]: string | number | boolean;
}): string => {
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

const prepareData = (
  arr: { [index: string | symbol]: string }[],
  sort: {
    [index: string | symbol]: string | boolean;
    sort: string;
    direction: boolean;
  }
): void => {
  arr?.sort(function (item1, item2) {
    let result;
    if (sort.direction === true) {
      result =
        Number.parseFloat(item2[sort.sort]) -
        Number.parseFloat(item1[sort.sort]);
      if (isNaN(result))
        return item1[sort.sort].localeCompare(item2[sort.sort]);
      return result;
    } else {
      result =
        Number.parseFloat(item1[sort.sort]) -
        Number.parseFloat(item2[sort.sort]);
      if (isNaN(result))
        return item2[sort.sort].localeCompare(item1[sort.sort]);
      return result;
    }
  });
};
export { objectToQuery, prepareData };
