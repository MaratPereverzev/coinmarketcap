import { useEffect, useRef, useCallback } from "react";

const Default = (callback, delay) => {
  const callbackRef = useRef(callback);
  const callbackTimeoutRef = useRef(callbackRef);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const timeoutDispatch = useCallback(
    (data) => {
      callbackTimeoutRef.current = setTimeout(() => {
        callbackRef.current(data);
      }, delay);
    },
    [delay]
  );

  const timeoutClear = useCallback(() => {
    callbackTimeoutRef.current && clearTimeout(callbackTimeoutRef.current);
  }, []);

  const timeoutReset = useCallback(
    (data) => {
      timeoutClear();
      timeoutDispatch(data);
    },
    [timeoutClear, timeoutDispatch]
  );

  return { timeoutDispatch, timeoutClear, timeoutReset };
};

export { Default as useTimeout };
