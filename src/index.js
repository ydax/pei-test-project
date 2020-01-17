import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { rateReducer } from "./RateReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import fetchDataWatcher from "./sagas";

/** Creates Redux Store with Saga middleware. */
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rateReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchDataWatcher);

/** Builds dispatcher. */
const action = type => store.dispatch({ type });
action("FETCH_DATA");

/** Provides the store and onRefresh method to the App as a prop. */
function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

render();
store.subscribe(render);