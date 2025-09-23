import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { thunk } from "redux-thunk";


//import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

import Home from "./components/home";
import Results from "./components/results";

function main() {

  ReactDOM.render(
    
    <Provider store={createStoreWithMiddleware(reducers)}>
      
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
      </BrowserRouter>
    
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
