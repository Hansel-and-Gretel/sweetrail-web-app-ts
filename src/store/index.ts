import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import browserHistory from '../lib/history'

import JourneyService, { JourneyState } from './journey/reducers'
import JourneySaga from './journey/sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface RootState {
    router: RouterState,
    journeyState: JourneyState

}

const rootReducer = combineReducers({
    router: connectRouter(browserHistory),
    journeyState: JourneyService

})

const sagaMiddleware = createSagaMiddleware()


const index = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);


function* rootSaga() {
    yield all([
        JourneySaga()
    ])
}
sagaMiddleware.run(rootSaga)

export default index
