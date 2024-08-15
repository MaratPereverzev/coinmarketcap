import { useState, useCallback } from "react";

const useRender = () => {
  const [, setRender] = useState(false);

  return useCallback(() => {
    setRender((prev) => !prev);
  }, []);
};

export { useRender };
