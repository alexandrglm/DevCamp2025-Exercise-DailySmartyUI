import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";


//import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css'
import "./style/main.scss";

import Home from "./components/home";

function main() {

  ReactDOM.render(
    
    <Provider store={createStoreWithMiddleware(reducers)}>
      
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Home} />
      </BrowserRouter>
    
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
