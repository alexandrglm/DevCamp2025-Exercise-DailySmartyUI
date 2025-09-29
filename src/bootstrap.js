import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { thunk } from "redux-thunk";


import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

import Home from "./components/home";
import Results from "./components/results";


//import App from "./components/app";
import reducers from "./reducers";




// De 10-211, ReduxDevTools,
const createStoreWithMiddleware = applyMiddleware(thunk)(

  compose(

    (window.devToolsExtension ? window.devToolsExtension()  : f => f)(createStore)

  )

);



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
