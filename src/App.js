import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import AppRouter from "./router/AppRouter";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
