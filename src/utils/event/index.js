const addEventListener = (name, callback, target = document) => {
  if (typeof name !== "string")
    throw new Error("event props are inappropriate");

  target.addEventListener(name, callback);

  return () => target.removeEventListener(name, callback);
};

const dispatchEvent = (name, data, target = document) => {
  if (typeof name !== "string")
    throw new Error("event props are inappropriate");

  const event = new CustomEvent(name, { detail: data });
  target.dispatchEvent(event);
};

export { addEventListener, dispatchEvent };
