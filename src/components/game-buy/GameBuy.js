import React from "react";
import Button from "../button/Button";
import "./game-buy.scss";

const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} грн.</span>
      <Button type="primary" onClick={() => null}>
        В корзину{" "}
      </Button>
    </div>
  );
};

export default GameBuy;
