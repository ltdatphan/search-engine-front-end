import "./stylesheets/card.css";

const Card = ({ id, title, topic, score }) => {
  return (
    <div className="card">
      <div>
        <h2>
          {title} - ID: {id}
        </h2>
        <span>Topic: {topic}</span>
        <br></br>
        <span>Score: {score}</span>
      </div>
      <a
        href={`https://en.wikipedia.org/w/index.php?curid=${id}`}
        target="_blank"
        rel="noreferrer"
      >
        Visit site
      </a>
    </div>
  );
};

export default Card;
