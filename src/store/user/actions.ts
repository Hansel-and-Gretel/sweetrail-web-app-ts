import {createAction, createAsyncAction} from 'typesafe-actions'
import {Journey} from "../../types/journey";
import {LoginData, LoginResType, SignUpData, SignUpResType} from "../../types/user";

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