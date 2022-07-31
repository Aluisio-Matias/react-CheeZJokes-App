import React from "react";
import "./Joke.css";

function Joke({ vote, votes, text, id }) {
  const upVote = () => vote(id, +1);
  const downVote = () => vote(id, -1);
  const toggleLock = () => vote(id);
  let locked;

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        <button onClick={toggleLock}>
          <i className={`fas ${locked ? "fa-lock" : "fa-unlock"}`} />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;
