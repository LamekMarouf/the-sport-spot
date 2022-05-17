import React from "react";
import { Link } from "react-router-dom";

const ThoughtList = ({ thoughts, title, showTitle = true }) => {
  return (
    <div className="thought-list-page">
      {showTitle && <div className="title">{title}</div>}
      <div className="thought-list">
        {thoughts &&
          thoughts.map((thought) => (
            <div key={thought._id} className="card">
              <p className="thought-text">{thought.thoughtText}</p>
              <Link to={`/thoughts/${thought._id}`}>Comments</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ThoughtList;
