import { call, put, all, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from './actions'
import * as request from './requests'

export function* getJourneyDetail(action: ActionType<typeof actions.getJourneyDetailAsync.request>) {
    try {
        const data = yield call(request.getJourneyDetail, action.payload.id)
        yield put(actions.getJourneyDetailAsync.success(data))
        console.log(data)
    } catch (e) {
        yield put(actions.getJourneyDetailAsync.failure())
    }
}


export function* fetchMyJourneyListSaga(action: ActionType<typeof actions.fetchMyJourneyListAsync.request>) {
    try {
        const data = yield call(request.getMyJourneyList, action.payload.id)
        yield put(actions.fetchMyJourneyListAsync.success(data))
        console.log(data)
    } catch (e) {
        yield put(actions.fetchMyJourneyListAsync.failure())
    }
}

export function* fetchOtherJourneyListSaga(action: ActionType<typeof actions.fetchOtherJourneyListAsync.request>) {
    try {
        const data = yield call(request.getMyJourneyList, action.payload.id)
        yield put(actions.fetchOtherJourneyListAsync.success(data))
    } catch (e) {
        yield put(actions.fetchOtherJourneyListAsync.failure())
    }
}

export function* fetchMainJourneyListSaga(action: ActionType<typeof actions.fetchMainJourneyListAsync.request>) {
    try {
        const data = yield call(request.getMainJourneyList)
        yield put(actions.fetchMainJourneyListAsync.success(data))
    } catch (e) {
        yield put(actions.fetchMainJourneyListAsync.failure())
    }
}

export function* fetchStyleJourneyListSaga(action: ActionType<typeof actions.fetchStyleJourneyListAsync.request>) {
    try {
        const data = yield call(request.getStyleJourneyList, action.payload.type)
        yield put(actions.fetchStyleJourneyListAsync.success(data))
    } catch (e) {
        yield put(actions.fetchStyleJourneyListAsync.failure())
    }
}

export function* fetchAccompanyJourneyListSaga(action: ActionType<typeof actions.fetchStyleJourneyListAsync.request>) {
    try {
        const data = yield call(request.getAccompanyJourneyList, action.payload.type)
        yield put(actions.fetchAccompanyJourneyListAsync.success(data))
    } catch (e) {
        yield put(actions.fetchAccompanyJourneyListAsync.failure())
    }
}


export default function* () {
    yield all([
        takeEvery(actions.getJourneyDetailAsync.request, getJourneyDetail),
        takeEvery(actions.fetchMyJourneyListAsync.request, fetchMyJourneyListSaga),
        takeEvery(actions.fetchOtherJourneyListAsync.request, fetchOtherJourneyListSaga),
        takeEvery(actions.fetchMainJourneyListAsync.request, fetchMainJourneyListSaga),
        takeEvery(actions.fetchStyleJourneyListAsync.request, fetchStyleJourneyListSaga),

    ])
}




