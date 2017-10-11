import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
import NewsDetails from "./components/NewsDetails.jsx";
import ServiceTabContent from './components/ServiceTabContent.jsx'
import ServicesTabs from './components/ServicesTabs.jsx'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import NewsVersion from './components/NewsVersion.jsx';

import './css/all.css';

import App from './components/App.jsx';
import reducers from './components/reducers'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore (reducers, composeWithDevTools(applyMiddleware(thunk)));
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render (
    <Provider store={store}>
        <div>
        <Router history={hashHistory}>
            <Route path="/" component={App} >
                <Route path="/news/:id" component={NewsVersion}></Route>
                <Route path="*" component={App}/>
            </Route>
            <Route path="*" component={App}/>
        </Router>
        </div>
    </Provider>, document.getElementById ('root'));