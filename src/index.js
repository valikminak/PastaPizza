import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import createRootReducer from './Reducers/Index'
import App from "./Components/App/App";
const history = createBrowserHistory();
const middleWares = [thunk, routerMiddleware(history)];
export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleWares))
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

export default store