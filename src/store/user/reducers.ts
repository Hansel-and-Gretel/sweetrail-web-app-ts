import {createReducer, ActionType } from "typesafe-actions";
import * as actions from './actions'
import {UserType} from "../../types/user";

export type Actions = ActionType<typeof actions>

export interface UserState {
    auth: {
        isAuth: boolean;
        isLogin: boolean;
        userId: boolean;
        userName: string;
        userImg: string;
        journeyType: string;
        lifeStyle: string;
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
        userId: false,
        userName: '',
        userImg: '',
        journeyType: '',
        lifeStyle: '',
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
    .handleAction(actions.loginUserAsync.success, (state, action) => ({...state, auth: { ...state.auth, isAuth: true, isLogin: action.payload.isLogin, loading: false }}))
    .handleAction(actions.signupUserAsync.request, (state) => ({...state, signUp: { ...state.signUp, loading: true }}))
    .handleAction(actions.signupUserAsync.success, (state, action) => ({...state, signUp: { ...state.auth, isMember: action.payload.registerSuccess, loading: false }}))