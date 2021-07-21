import { useCallback, useState } from "react";
import storage from "../utils/storage";

const useStorage = (key) => {
  const [state, setState] = useState(() => storage.get(key));

  const set = useCallback(
    (value) => {
      storage.set(key, value);
      setState(value);
    },
    [key]
  );

  const remove = useCallback(() => {
    storage.remove(key);
    setState(undefined);
  }, [key]);

  return [state, set, remove];
};

export { useStorage };
