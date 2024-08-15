let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const convertNumber = (value) => {
  if (isNaN(+value)) {
    return value;
  }

  return formatter.format(+value);
};

export { convertNumber };
