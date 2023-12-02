import { useState, useEffect } from "react";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
import { search_scores } from "./api/api";
// import "./App.css";
import BarChart from "./components/BarChart";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

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
    search_scores(query)
      .then((res) => {
        setLoading(false);
        setResult(res.data.result);
        setNbScores(res.data.nb_result);
      })
      .catch(e =>
        console.log(e));
  };

  useEffect(() => {
    if (result.length === 0 || nbScores.length === 0) return;
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
      <h1>CPS842 (F2022) - Wikipedia Search Engine</h1>

      <div className="intro-container">
        <div>
          <h2>Brief intro about the project</h2>
          This the final project for CPS842 - Information Retrieval and Web Search made by David Phan, Sania Syed, Kirill Shmakov and Kim Rikter-Svendsen.<br /><br />
          The goal of this project is to apply our understanding and create a meaningful search engine.
          We've chosen a subset of 1000 Wikipedia articles and trained 2 models to create our search engine.<br /><br />
          Here's how it works:
          <ul>
            <li><span>Okapi BM25 model</span> - Help calculate how relevant the search term is compared to the contents of the Wikipedia articles. Essentially looking at the contents of each article and rank their relevancy compared to the search term. A higher score would indicate relevancy.</li>
            <li><span>Naive Bayes (NB) model</span> - Help the engine interpret which topics are the most relevant to the search terms. We've trained the model with by providing a subset of articles and their topic labels and tested the model with the remaining data.</li>
            <li>The final result is a search engine capable of inferring the topics the user is interested in based on the search term and only return most relevant articles within those topics.</li>
          </ul>
          <br />
          <span className="git-link"><FaGithub style={{ marginRight: "10px" }} /><a href="https://github.com/ltdatphan/search-engine-front-end">Link to repo</a></span>
          <br />
          <span>But enough theory, have a try and see how it goes :)</span>

        </div>
      </div>
      <form onSubmit={queryData} className="searchBar">
        <input
          type="text"
          id="query"
          name="query"
          placeholder="Enter search query...."
          required
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit"><CiSearch style={{ marginRight: "8px" }} />Search</button>
      </form>
      {loading && <Spinner />}
      {result.length > 0 && <div className="result-container">
        <span>Showing 10 results best matches the term "{query}"</span>
        {result.map((item, index) => <Card key={index} {...item} />)}
      </div>}


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
