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


// export function* fetchMyJourneyListSaga(action: ActionType<typeof actions.fetchMyJourneyListAsync.request>) {
//     try {
//         const data = yield call(request.getMyJourneyList, action.payload.id)
//         yield put(actions.fetchMyJourneyListAsync.success(data))
//     } catch (e) {
//         yield put(actions.fetchMyJourneyListAsync.failure())
//     }
// }

export default function* () {
    yield all([
        takeEvery(actions.getJourneyDetailAsync.request, getJourneyDetail),
        // takeEvery(actions.fetchMyJourneyListAsync.request, fetchMyJourneyListSaga),

    ])
}




