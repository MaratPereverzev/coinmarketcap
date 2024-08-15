const getPageHash = () => {
  return window.location.pathname.replace("/", "") !== ""
    ? window.location.pathname.replace("/", "")
    : "main";
};

const setPageHash = (pathname, toLocalStorage) => {
  window.history.pushState(null, null, pathname);
  if (toLocalStorage === true) localStorage.setItem("page", pathname);
};

export { getPageHash, setPageHash };
