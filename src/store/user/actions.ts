import {createAction, createAsyncAction} from 'typesafe-actions'
import {Journey} from "../../types/journey";
import {
    AuthType,
    LoginData,
    LoginResType,
    LogoutResType,
    SignUpData,
    SignUpResType,
    UserDetail
} from "../../types/user";

export const loginUserAsync = createAsyncAction(
    "LOGIN_USER_REQUEST",
    "LOGIN_USER_SUCCESS",
    "LOGIN_USER_FAILURE"
)<{form: LoginData}, LoginResType, undefined>();

export const signupUserAsync = createAsyncAction(
    "SIGNUP_USER_REQUEST",
    "SIGNUP_USER_SUCCESS",
    "SIGNUP_USER_FAILURE"
)<{form: SignUpData}, SignUpResType, undefined>();

export const logoutUserAsync = createAsyncAction(
    "LOGOUT_USER_REQUEST",
    "LOGOUT_USER_SUCCESS",
    "LOGOUT_USER_FAILURE"
)<undefined, LogoutResType, undefined>();

export const getAuthAsync = createAsyncAction(
    "AUTH_USER_REQUEST",
    "AUTH_USER_SUCCESS",
    "AUTH_USER_FAILURE"
)<{token: string}, LoginResType, undefined>();


export const getUserDetailAsync = createAsyncAction(
    "GET_USER_REQUEST",
    "GET_USER_SUCCESS",
    "GET_USER_FAILURE"
)<{id: string }, UserDetail, undefined>();