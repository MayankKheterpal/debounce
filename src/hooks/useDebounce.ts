import { useEffect, useState } from "react";

//If the value that user has passsed in doesn't change for certain amount of time then use that value to hit the api
function useDebounce(cb: (...args: any[]) => any, timer = 250) {
  //   const [debouncedValue, setDebouncedValue] = useState(userUtterance);
  //   useEffect(() => {
  //     const timerOut = setTimeout(() => {
  //       //   setDebouncedValue(userUtterance);
  //       cb();
  //     }, timer);
  //     // Clearing the TimeOut makes sure that if the value is changed the new timer is inttitated as previous will be cleared
  //     return () => {
  //       clearTimeout(timerOut);
  //     };
  //   }, [timer]);
  let timerOut: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timerOut);
    timerOut = setTimeout(() => {
      cb(...args);
    }, timer);
  };
}

export default useDebounce;
