import { call, put, all, takeEvery, takeLeading, select } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import * as request from './requests'
// import {push} from "react-router-redux"
import setCookie, {deleteCookie} from "../../lib/cookie";
import {push} from "connected-react-router";
import {Simulate} from "react-dom/test-utils";
import * as userSelector from './selectors';
// @ts-ignore
import {get} from "lodash";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function* fetchLoginSaga(action: ActionType<typeof actions.loginUserAsync.request>) {
    try {
        const {data} = yield call(request.loginUser, action.payload.form)
        yield put(actions.loginUserAsync.success(data))
        // token을 브라우저 쿠키에 저장하자

        setCookie('x_auth', data.user.token, {
            "max-age": 60 * 60 * 24 * 60,
            expires: 1, //1일 유효기간
        })
        window.location.replace("/main")
        alert('로그인에 성공했습니다.')


    } catch (e) {
        yield put(actions.loginUserAsync.failure())
        alert('로그인에 실패했습니다. 아이디와 이메일을 다시 확인해주세요')
    }
}

export function* fetchSignUpSaga(action: ActionType<typeof actions.signupUserAsync.request>) {
    try {
        const data = yield call(request.signupUser, action.payload.form)
        yield put(actions.signupUserAsync.success(data))
        alert('회원가입에 성공했습니다.')
        yield put(push('/login'))
    } catch (e) {
        yield put(actions.signupUserAsync.failure())
        alert('회원가입에 실패했습니다.')
    }

}

export function* fetchLogoutSaga(action: ActionType<typeof actions.logoutUserAsync.request>) {
    try {
        const data = yield call(request.logoutUser)
        yield put(actions.logoutUserAsync.success(data))
        // alert('로그아웃에 성공했습니다.')
        deleteCookie('x_auth')
        alert("로그아웃에 성공했습니다.")
        yield put(push('/'))
    } catch (e) {
        yield put(actions.logoutUserAsync.failure())
        alert("로그아웃에 실패했습니다.")
    }

}

export function* getAuthSaga(action: ActionType<typeof actions.getAuthAsync.request>) {
    try {
        const data = yield call(request.getAuth, action.payload.token)
        yield put(actions.getAuthAsync.success(data))

    } catch (e) {
        yield put(actions.signupUserAsync.failure())
        console.log('Authentication is not certified')
    }
}


export default function* () {
    yield all([
        takeEvery(actions.loginUserAsync.request, fetchLoginSaga),
        takeLeading(actions.signupUserAsync.request, fetchSignUpSaga),
        takeEvery(actions.getAuthAsync.request, getAuthSaga),
        takeEvery(actions.logoutUserAsync.request, fetchLogoutSaga),
    ])
}




