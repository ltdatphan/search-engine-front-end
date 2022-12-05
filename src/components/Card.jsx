import "./stylesheets/card.module.css";

const Card = ({ id, title, topic }) => {
  return (
    <div className="card">
      <div>
        <h2>
          {title} - ID: {id}
        </h2>
        <span>{topic}</span>
      </div>
      <a
        href={`https://en.wikipedia.org/w/index.php?curid=${id}`}
        target="_blank"
      >
        Visit site
      </a>
    </div>
  );
};

export default Card;
