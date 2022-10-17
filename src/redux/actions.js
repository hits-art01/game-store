import {
  DELETE_ITEM_FROM_CART,
  SET_CURRENT_GAME,
  SET_ITEM_IN_CART,
} from "./types";

export const setCurrentGame = (payload) => ({
  type: SET_CURRENT_GAME,
  payload,
});

export const setItemInCart = (payload) => ({
  type: SET_ITEM_IN_CART,
  payload,
});

export const deleteItemFromCart = (payload) => ({
  type: DELETE_ITEM_FROM_CART,
  payload,
});
