import React from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { calkTotalPrice } from "../cartTotalPrice";
import "./cart-menu.scss";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                title={game.title}
                price={game.price}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calkTotalPrice(items)} грн.</span>
          </div>
          <Button type="primary" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
