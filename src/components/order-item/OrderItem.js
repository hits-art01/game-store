import React from "react";
import { useDispatch } from "react-redux";
import GameCover from "../game-cover/GameCover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./order-item.scss";
import { deleteItemFromCart } from "../../redux/actions";

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} грн.</span>
        <AiOutlineCloseCircle onClick={handleClick} />
      </div>
    </div>
  );
};

export default OrderItem;
