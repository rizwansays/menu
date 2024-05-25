import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <div>
      <App/>
    </div>
    <Footer/> 
    </BrowserRouter>
  </React.StrictMode>
);
