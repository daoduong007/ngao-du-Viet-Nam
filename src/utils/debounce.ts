import React from "react";

//not work
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

  // const throttle = (callback, delay) => {
  //   let lastTime = 0;
  //   console.log('call innit');

  //   return (...args) => {
  //     const now = new Date().getTime();
  //     if (now - lastTime < delay) return;
  //     lastTime = now;
  //     callback(...args);
  //   };
  // };

  //tối ưu throttle
  function throttle(callback, limit) {
    let waiting = false;

    let countClick = 0;
    return () => {
      countClick++;
      if (!waiting) {
        callback();
        waiting = true;
        console.log(`count click: ${countClick}`);
        setTimeout(function () {
          waiting = false;
        }, limit);
      }
    };
  }

