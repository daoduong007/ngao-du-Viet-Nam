import React from "react";

export const DebounceJS2 = (e,func, TypepingRef ,delay ) => {
  const value = e.target.value;
  return function excutedFunc  (...args) {
    if (TypepingRef.current) {
      clearTimeout(TypepingRef.current);
    }

    TypepingRef.current = setTimeout(() => {
      func(value);
    },delay)
  }
}
