import { Indexable } from "components/types";
import { useEffect, useRef, useCallback } from "react";
const { setTimeout, clearTimeout } = window;

export const useTimeout = (callback: (data?: any) => void, delay: number) => {
  const callbackRef = useRef(callback);
  const callbackTimeoutRef = useRef<number>(
    setTimeout(() => callbackRef.current(), delay)
  );

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const timeoutDispatch = useCallback(
    (data?: Indexable) => {
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
    (data?: Indexable) => {
      timeoutClear();
      timeoutDispatch(data);
    },
    [timeoutClear, timeoutDispatch]
  );

  return { timeoutDispatch, timeoutClear, timeoutReset };
};
