const getPageHash = () => {
  return window.location.pathname.replace("/", "") !== ""
    ? window.location.pathname.replace("/", "")
    : "main";
};

const setPageHash = (pathname, toLocalStorage) => {
  window.history.pushState(null, null, pathname);
  if (toLocalStorage === true) localStorage.setItem("page", pathname);
};

const popPage = (pathname, toLocalStorage) => {
  window.history.pushState(
    null,
    null,
    window.location.pathname.replace("/", "")
  );
};

export { getPageHash, setPageHash, popPage };
