const getLocalStorageValue = (key: string): string | null => {
  if (typeof key !== "string") throw new Error("incorrect key");

  const data: string | null = localStorage.getItem(key);

  if (data === null) {
    return data;
  }
  return JSON.parse(data);
};

const setLocalStorageValue = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export { getLocalStorageValue, setLocalStorageValue };
