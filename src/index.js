import Promise from 'es6-promise'
import objectAssign from 'object-assign'
if(typeof Object.assign !== 'function') Object.assign = objectAssign;

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers/index'
import asyncMw from './middlewares/asyncMw'
import fetchJsonMw from './middlewares/fetchJsonMw'
import loggerMw from './middlewares/loggerMw'

import './utils/imgSuffix'
import './styles/normalized.scss'
import './styles/main.scss'
import App from './frames/App'
import LookParty from './pages/LookParty'
import ListenParty from './pages/ListenParty'
import LearnParty from './pages/LearnParty'
import FollowParty from './pages/FollowParty'
import LiveDetail from './pages/LiveDetail'
import VideoDetail from './pages/VideoDetail'
import VideoList from './pages/VideoList'

const isProduction = process.env.NODE_ENV === 'production';

const middlewares = isProduction ? (
    [thunkMiddleware, asyncMw, fetchJsonMw]
) : (
    [thunkMiddleware, asyncMw, fetchJsonMw, loggerMw]
);

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Redirect from="/" to="/look-party" />
            <Route path="/" component={App}>
                <Route path="look-party" component={LookParty} />
                <Route path="learn-party" component={LearnParty} />
                <Route path="listen-party" component={ListenParty} />
                <Route path="follow-party" component={FollowParty} />
            </Route>
            <Route path="/live/:liveId" component={LiveDetail}/>
            <Route path="/videos/:section" component={VideoList}/>
            <Route path="/video/:videoId" component={VideoDetail}/>
        </Router>
    </Provider>
, document.getElementById('app'));

// hide app loading mask
(function hideAppLoadingMask() {
    const appLoadingMask = document.getElementById('app-loading-mask');
    if(!appLoadingMask) return;
    appLoadingMask.style.opacity = 0;
    setTimeout(() => {
        appLoadingMask.parentNode.removeChild(appLoadingMask);
    }, 1000);
})();