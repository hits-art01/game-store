import React from "react";
import "./game-genres.scss";

const GameGenres = ({ genre }) => {
  return (
    <div className="game-genre">
      <span>{genre}</span>
    </div>
  );
};

export default GameGenres;
