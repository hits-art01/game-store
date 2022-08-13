import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
