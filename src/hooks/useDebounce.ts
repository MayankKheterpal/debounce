import { useEffect, useState } from "react";

function useDebounce(userUtterance: string, timer = 250) {
  const [debouncedValue, setDebouncedValue] = useState(userUtterance);

  useEffect(() => {
    const timerOut = setTimeout(() => {
      setDebouncedValue(userUtterance);
    }, timer);

    // Clearing the TimeOut makes sure that if the value is changed the new timer is inttitated as previous will be cleared
    return () => {
      clearTimeout(timerOut);
    };
  }, [userUtterance, timer]);

  return debouncedValue;
}

export default useDebounce;
