import { useState } from "react";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
import { search } from "./api/api";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const queryData = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult([]);
    search(query).then((res) => {
      setLoading(false);
      setResult(res.data.result);
    });
  };
  return (
    <>
      <h1>CPS842 A2 (F2022) - Wikipedia Search Engine</h1>
      <h2 style={{ textAlign: "center" }}>David Phan - Kirill Shmakov </h2>
      <form onSubmit={queryData} className="searchBar">
        <input
          type="text"
          id="query"
          name="query"
          placeholder="Enter search query...."
          required
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      {loading && <Spinner />}
      <div className="result-container">
        {result.length > 0
          ? result.map((item, index) => <Card key={index} {...item} />)
          : null}
      </div>
    </>
  );
}

export default App;
