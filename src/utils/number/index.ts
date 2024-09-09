let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const convertNumber = (value: number): string | number => {
  if (isNaN(+value)) {
    return value;
  }

  return formatter.format(+value);
};

export { convertNumber };
