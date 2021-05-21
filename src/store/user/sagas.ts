import { call, put, all, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from './actions'
import * as request from './requests'

export function* fetchLoginSaga(action: ActionType<typeof actions.loginUserAsync.request>) {
    try {
        const data = yield call(request.loginUser, action.payload.form)
        yield put(actions.loginUserAsync.success(data))
        alert('로그인에 성공했습니다.')
    } catch (e) {
        yield put(actions.loginUserAsync.failure())
        alert('로그인에 실패했습니다.')
    }

}

export function* fetchSignUpSaga(action: ActionType<typeof actions.signupUserAsync.request>) {
    try {
        const data = yield call(request.signupUser, action.payload.form)
        yield put(actions.signupUserAsync.success(data))
        alert('회원가입에 성공했습니다.')
    } catch (e) {
        yield put(actions.signupUserAsync.failure())
        alert('회원가입에 실패했습니다.')
    }

}

export default function* () {
    yield all([
        takeEvery(actions.loginUserAsync.request, fetchLoginSaga),
        takeEvery(actions.signupUserAsync.request, fetchSignUpSaga),

    ])
}




