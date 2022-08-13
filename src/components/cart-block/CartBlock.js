import React from "react";
import "./cart-block.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartBlock = () => {
  return (
    <div className="cart-block">
      <AiOutlineShoppingCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price"> 2576 грн</span>
    </div>
  );
};

export default CartBlock;
