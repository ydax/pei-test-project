import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RateReducer from "./RateReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rateSaga from "./sagas";

/** Creates Redux Store with Saga middleware. */
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(RateReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rateSaga);

/** Provides the store to the App as a prop. */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
