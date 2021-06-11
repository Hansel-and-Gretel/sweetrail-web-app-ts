import {createReducer, ActionType } from "typesafe-actions";
import * as actions from './actions'
import {UserType} from "../../types/user";

export type Actions = ActionType<typeof actions>

export interface UserState {
    auth: {
        isAuth: boolean;
        isLogin: boolean;
        message: string;
        user: {
            userId: number | null;
            userName: string;
            userImg: string;
            journeyType: string;
            lifeStyle: string;
            token: string;
        }
        loading: boolean;
        error: boolean;
    };
    signUp: {
        isMember: boolean;
        loading: boolean;
    }
}

const initialState: UserState = {
    auth: {
        isAuth: false,
        isLogin: false,
        message: '',
        user: {
            userId: null,
            userName: '',
            userImg: '',
            journeyType: '',
            lifeStyle: '',
            token: ''
        },
        loading: false,
        error: false,
    },
    signUp: {
        isMember: false,
        loading: false
    }
}

export default createReducer<UserState, Actions>(initialState)
    .handleAction(actions.loginUserAsync.request, (state) => ({...state, auth: { ...state.auth, loading: true }}))
    .handleAction(actions.loginUserAsync.success, (state, action) => ({...state, auth: { ...state.auth,
            isAuth: action.payload.isLogin,
            isLogin: action.payload.isLogin,
            message: action.payload.message,
            user: {
                userId: action.payload.user.userId,
                userName: action.payload.user.userName,
                userImg: action.payload.user.userImg,
                journeyType: action.payload.user.journeyType,
                lifeStyle: action.payload.user.lifeStyle,
                token: action.payload.user.token,

            },
            loading: false
            }}))
    .handleAction(actions.logoutUserAsync.request, (state) => ({...state, auth: { ...state.auth, loading: true }}))
    .handleAction(actions.logoutUserAsync.success, (state) => ({...state, auth: {...state.auth,
            isAuth: false,
            isLogin: false,
            message: '',
            user: {
                userId: null,
                userName: '',
                userImg: '',
                journeyType: '',
                lifeStyle: '',
                token: '',
            },
            loading: false
    }}))
    .handleAction(actions.signupUserAsync.request, (state) => ({...state, signUp: { ...state.signUp, loading: true }}))
    .handleAction(actions.signupUserAsync.success, (state, action) => ({...state, signUp: { ...state.signUp, isMember: action.payload.registerSuccess, loading: false }}))
    .handleAction(actions.getAuthAsync.request, (state) => ({...state, auth: { ...state.auth, loading: true }}))
    .handleAction(actions.getAuthAsync.success, (state, action) => ({...state,
        auth: { ...state.auth,
                isAuth: action.payload.isAuth,
                userId: action.payload.userId,
                userName: action.payload.userName,
                userImg: action.payload.userImg,
                journeyType: action.payload.journeyType,
                lifeStyle: action.payload.lifeStyle,
                loading: false
            }}))
    .handleAction(actions.getAuthAsync.failure, (state, action) => ({...state, auth: { ...state.auth, isAuth: false, loading: false }}))