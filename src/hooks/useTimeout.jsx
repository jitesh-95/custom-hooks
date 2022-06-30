import { useEffect } from "react";
import { useState } from "react";

const useTimeout = (time) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return setReady(true);
    }, time);
  }, []);

  return { ready };
};

export default useTimeout;
