import React, { useState } from "react";
import "./cart-block.scss";
import { useSelector } from "react-redux/es/exports";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartMenu from "../cart-menu/CartMenu";
import { calkTotalPrice } from "../cartTotalPrice";
import ItemsInCart from "../items-in-cart/ItemsInCart";

const CartBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calkTotalPrice(items);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <AiOutlineShoppingCart
        size={25}
        className="cart-block__icon"
        onClick={() => setIsVisible(!isVisible)}
      />
      <span className="cart-block__total-price">
        {totalPrice > 0 ? `${totalPrice} грн.` : null}
      </span>
      {isVisible && <CartMenu items={items} />}
    </div>
  );
};

export default CartBlock;
