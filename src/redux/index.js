import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { gamesReducer } from "./games/reducer";
import { cartReducer } from "./cart/reducer";

// const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  games: gamesReducer,
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

// saga.run();
