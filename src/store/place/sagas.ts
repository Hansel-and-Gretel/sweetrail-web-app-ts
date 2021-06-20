import { call, put, all, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from './actions'
import * as request from './requests'

export function* getPlaceByJourneySaga(action: ActionType<typeof actions.getPlaceByJourneyAsync.request>) {
    try {
        const data = yield call(request.getPlaceListByJourney, action.payload.id)
        yield put(actions.getPlaceByJourneyAsync.success(data))
    } catch (e) {
        yield put(actions.getPlaceByJourneyAsync.failure())
    }
}

export function* getAllPlaceSaga(action: ActionType<typeof actions.getAllPlaceAsync.request>) {
    try {
        const data = yield call(request.getAllPlaceList)
        yield put(actions.getAllPlaceAsync.success(data))
    } catch (e) {
        yield put(actions.getAllPlaceAsync.failure())
    }
}


export default function* () {
    yield all([
        takeEvery(actions.getPlaceByJourneyAsync.request, getPlaceByJourneySaga),
        takeEvery(actions.getAllPlaceAsync.request, getAllPlaceSaga)
    ])
}