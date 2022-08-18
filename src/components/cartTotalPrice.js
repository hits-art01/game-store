export const calkTotalPrice = (items) =>
  items.reduce((acc, game) => (acc += game.price), 0);
