import { useCallback, useState } from "react";
import "./App.css";
import useDebounce from "./hooks/useDebounce";
import { getMovies } from "./utils";

function App() {
  const [resultList, setResultList] = useState<string[]>();

  const onChange = useCallback(async (value: string) => {
    setResultList([]);
    if (value.length > 0) {
      const filteredValues = await getMovies(value);
      setResultList(filteredValues);
    }
  }, []);

  const debounce = useDebounce(onChange);

  return (
    <div className="App">
      <input
        className="Text-box"
        type="text"
        name="textbox"
        id="text-1"
        onChange={(e) => debounce(e.target.value)}
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
