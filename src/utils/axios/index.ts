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
    [index: string | symbol]: string | boolean | undefined;
    field: string;
    direction?: boolean;
  }
): void => {
  arr?.sort(function (item1, item2) {
    let result;
    if (sort.direction) {
      result =
        Number.parseFloat(item2[sort.field]) -
        Number.parseFloat(item1[sort.field]);
      if (isNaN(result))
        return item1[sort.field].localeCompare(item2[sort.field]);
      return result;
    } else {
      result =
        Number.parseFloat(item1[sort.field]) -
        Number.parseFloat(item2[sort.field]);
      if (isNaN(result))
        return item2[sort.field].localeCompare(item1[sort.field]);
      return result;
    }
  });
};
export { objectToQuery, prepareData };
