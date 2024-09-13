import type { Indexable } from "@/components/types";

const addEventListener = (
  name: string,
  callback: (params: Indexable) => void,
  target: Document | Window = document
): (() => void) => {
  if (typeof name !== "string")
    throw new Error("event props are inappropriate");

  target.addEventListener(name, callback);

  return () => target.removeEventListener(name, callback);
};

const dispatchEvent = (
  name: string,
  data: Indexable,
  target: Document | Window = document
): void => {
  if (typeof name !== "string")
    throw new Error("event props are inappropriate");

  const event = new CustomEvent(name, { detail: data });
  target.dispatchEvent(event);
};

export { addEventListener, dispatchEvent };
