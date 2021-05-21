import { createSelector } from 'reselect'
import { RootState } from '../index'

const getUserState = (state: RootState) => state.userState

export const getIsLogin = createSelector(getUserState, state => state.auth.isLogin)
export const getIsMember = createSelector(getUserState, state => state.signUp.isMember)

