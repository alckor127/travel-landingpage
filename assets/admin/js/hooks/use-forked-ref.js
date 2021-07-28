import { useMemo } from "react";

const useForkedRef = ({ ...refs }) => {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node) => {
      refs.forEach((ref) => {
        assignRef(ref, node);
      });
    };
  }, [refs]);
};

const assignRef = (ref, value) => {
  if (ref == null) return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (err) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
};

const isFunction = (value) => {
  return !!(value && {}.toString.call(value) == "[object Function]");
};

export { useForkedRef, assignRef, isFunction };
