import { useState, useEffect } from "react";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
import { search_scores } from "./api/api";
import "./App.css";
import BarChart from "./components/BarChart";

function App() {
  const [result, setResult] = useState([]);
  const [nbScores, setNbScores] = useState([]);
  const [bm25ChartData, setBm25ChartData] = useState([]);
  const [nbChartData, setNbChartData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const queryData = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult([]);
    search_scores(query).then((res) => {
      setLoading(false);
      setResult(res.data.result);
      setNbScores(res.data.nb_result);
    });
  };

  useEffect(() => {
    if (result == [] || nbScores == []) return;
    // Construct data to graph BM25 scores
    let xValuesBM25 = [];
    let yValuesBM25 = [];
    for (let i = 0; i < result.length; i++) {
      //xValuesBM25.push(result[i].id);
      xValuesBM25.push(result[i].title);
      yValuesBM25.push(result[i].score);
    }
    setBm25ChartData([xValuesBM25, yValuesBM25]);

    //Construct data to graph NB scores
    let xValuesNB = [];
    let yValuesNB = [];

    for (let i = 0; i < nbScores.length; i++) {
      xValuesNB.push(nbScores[i][0]);
      yValuesNB.push(nbScores[i][1]);
    }
    setNbChartData([xValuesNB, yValuesNB]);
  }, [result, nbScores]);

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

      {result.length > 0 ? (
        <div className="chart-container">
          <BarChart
            xData={bm25ChartData[0]}
            yData={bm25ChartData[1]}
            title="BM25 scores of top 10 most relevant docs"
            legend="BM25 scores of each doc"
            backgroundColor="rgb(255, 99, 132)"
            xAxisLabel="Document ID"
            yAxisLabel="BM25 Score"
          />
          <BarChart
            xData={nbChartData[0]}
            yData={nbChartData[1]}
            title="NB scores of top 10 most relevant categories"
            legend="NB scores of each category"
            backgroundColor="rgb(3, 86, 252)"
            xAxisLabel="Category Name"
            yAxisLabel="NB Score"
          />
        </div>
      ) : null}
    </>
  );
}

export default App;
