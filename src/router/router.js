import GamePage from "../pages/game-page/GamePage";
import HomePage from "../pages/home-page/HomePage";
import OrderPage from "../pages/order-page/OrderPage";

export const publickRoutes = [
  { path: "*", element: <HomePage /> },
  { path: "/app/:title", element: <GamePage /> },
  { path: "/order", element: <OrderPage /> },
];
