import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux'

import rootReducer from 'Redux/reducers'
    
import { Provider } from 'react-redux'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )
)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    
    document.getElementById('root')
);

serviceWorker.unregister();
