import "./stylesheets/card.css";
import { FaWikipediaW } from "react-icons/fa";

const Card = ({ id, title, topic, score }) => {
  return (
    <div className="card">
      <a
        href={`https://en.wikipedia.org/w/index.php?curid=${id}`}
        target="_blank"
        rel="noreferrer"
        className="card-header-link"
      >
        <div className="card-header">
          <div className="card-header-icon">
            <FaWikipediaW />
          </div>
          <div className="card-header-info">
            <span style={{ fontWeight: 400 }}>Wikipedia</span>
            <span>{`https://en.wikipedia.org/w/index.php?curid=${id}`}</span>
          </div>
        </div>
      </a>

      <div>
        <h2 className="card-title">
          <a
            href={`https://en.wikipedia.org/w/index.php?curid=${id}`}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </h2>
        <span className="other-info">Topic: {topic}</span>
        <br></br>
        <span className="other-info">Score: {score.toFixed(3)}</span>
      </div>
    </div>
  );
};

export default Card;
