import { DELETE_ITEM_FROM_CART, SET_ITEM_IN_CART } from "../types";

const initialState = {
  itemsInCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_IN_CART:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
      };
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (game) => game.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
