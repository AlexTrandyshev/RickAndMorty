import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { store } from "./store/sotre";
import { Provider } from "react-redux";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Characters } from "./components/Characters/Characters";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Header />
    <Characters />
    <Footer />
  </Provider>
);
