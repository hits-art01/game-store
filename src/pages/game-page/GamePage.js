import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../../components/game-buy/GameBuy";
import GameCover from "../../components/game-cover/GameCover";
import GameGenres from "../../components/game-genres/GameGenres";
import "./game-page.scss";

const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);
  if (!game) return null;
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube Video Player"
            frameBorder={0}
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки данного продукта:</p>
          {game.genres.map((genre) => (
            <GameGenres genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
