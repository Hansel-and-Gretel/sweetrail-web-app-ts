import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import browserHistory from '../lib/history'

import JourneyService, { JourneyState } from './journey/reducers'
import JourneySaga from './journey/sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
import {configureStore} from "@reduxjs/toolkit";

export interface RootState {
    router: RouterState,
    journeyState: JourneyState

}

const rootReducer = combineReducers({
    router: connectRouter(browserHistory),
    journeyState: JourneyService

})

const sagaMiddleware = createSagaMiddleware()


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
    compose


const index = createStore(
    // rootReducer,
    // compose(
    //     applyMiddleware(sagaMiddleware),
    //     composeWithDevTools(),
    // ),
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    // composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory))),
);


function* rootSaga() {
    yield all([
        JourneySaga()
    ])
}
sagaMiddleware.run(rootSaga)

export default index
