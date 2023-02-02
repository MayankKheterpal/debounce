import { useEffect, useRef, useState } from "react";
import "./App.css";
import useDebounce from "./hooks/useDebounce";
import { getMovies } from "./utils";

function App() {
  const [userUtterance, setUserUtterance] = useState("");
  const [resultList, setResultList] = useState<string[]>();
  const debouncedValue = useDebounce(userUtterance);
  // const unmounted = useRef(false);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setResultList([]);
      if (debouncedValue.length > 0) {
        const filteredValues = await getMovies(debouncedValue);
        // console.log(unmounted.current);
        if (!ignore) {
          console.log(debouncedValue);
          setResultList(filteredValues);
        }
      }
    })();

    return () => {
      // unmounted.current = true;
      ignore = true;
    };
  }, [debouncedValue]);

  return (
    <div className="App">
      <input
        className="Text-box"
        type="text"
        name="textbox"
        id="text-1"
        value={userUtterance}
        onChange={(e) => setUserUtterance(e.target.value)}
      />
      {resultList
        ? resultList.map((result, index) => (
            <div className="results" key={index}>
              {result}
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
