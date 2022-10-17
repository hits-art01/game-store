import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/actions";

import Button from "../button/Button";
import "./game-buy.scss";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemsInCart = items.some((item) => game.id === item.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemsInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} грн.</span>
      <Button
        type={isItemsInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemsInCart ? "Убрать из корзины" : "В корзину"}
      </Button>
    </div>
  );
};

export default GameBuy;
