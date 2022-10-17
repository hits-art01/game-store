import { SET_CURRENT_GAME } from "../types";

const initialState = {
  currentGame: null,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GAME:
      return {
        ...state,
        currentGame: (state.currentGame = action.payload),
      };
    default:
      return state;
  }
};
