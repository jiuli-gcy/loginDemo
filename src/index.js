import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from 'Pages/App';
import NavigationBar from 'Components/NavigationBar'
//import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'Routers';

import { createStore, applyMiddleware } from 'redux'

import rootReducer from 'Redux/reducers'
    
import { Provider } from 'react-redux'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
)

ReactDOM.render(
    <Provider store={ store }>
        <Router routes={routes}>
            <div>
                <NavigationBar />
                { routes }
            </div>
        </Router>
    </Provider>,
    
    document.getElementById('root')
);

//serviceWorker.unregister();
