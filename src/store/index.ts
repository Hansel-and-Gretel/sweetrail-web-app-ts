import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import browserHistory from '../lib/history'

import JourneyService, { JourneyState } from './journey/reducers'
import UserService, { UserState } from './user/reducers'
import PlaceService, { PlaceState } from './place/reducers'
import JourneySaga from './journey/sagas'
import UserSaga from './user/sagas'
import PlaceSaga from './place/sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface RootState {
    router: RouterState,
    journeyState: JourneyState,
    userState: UserState,
    placeState: PlaceState
}

const rootReducer = combineReducers({
    router: connectRouter(browserHistory),
    journeyState: JourneyService,
    userState: UserService,
    placeState: PlaceService
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
    rootReducer,
    // composeWithDevTools(applyMiddleware(...middlewares)),
    composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory))),
    // composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)))
);


function* rootSaga() {
    yield all([
        JourneySaga(),
        UserSaga(),
        PlaceSaga()
    ])
}
sagaMiddleware.run(rootSaga)

export default index
