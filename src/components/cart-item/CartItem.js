import React from "react";
import "./cart-item.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/actions";

const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} грн.</span>
        <AiOutlineCloseCircle className="icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default CartItem;
