const getPageHash = () => {
  return window.location.pathname.replace(/\/coinmarketcap\/?/, "") !== ""
    ? window.location.pathname.replace(/\/coinmarketcap\/?/, "")
    : "main";
};

const setPageHash = (pathname, toLocalStorage) => {
  window.history.pushState(null, null, pathname);
  if (toLocalStorage === true) localStorage.setItem("page", pathname);
};

export { getPageHash, setPageHash };
