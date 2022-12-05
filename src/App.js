import { useState } from "react";
import Card from "./components/Card";
import { search } from "./api/api";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const queryData = (e) => {
    e.preventDefault();
    search(query).then((res) => setResult(res.data.result));
  };
  return (
    <>
      <h1>CPS842 - Search Engine A2 </h1>

      <form onSubmit={queryData}>
        <input
          type="text"
          id="query"
          name="query"
          placeholder="Enter search query"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>

      {result.length > 0
        ? result.map((item, index) => <Card key={index} {...item} />)
        : null}
    </>
  );
}

export default App;
