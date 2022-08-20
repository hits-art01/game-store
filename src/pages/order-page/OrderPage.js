import React from "react";
import { useSelector } from "react-redux";
import { calkTotalPrice } from "../../components/cartTotalPrice";
import OrderItem from "../../components/order-item/OrderItem";
import "./order-page.scss";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} key={game.title} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму {calkTotalPrice(items)} грн.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
