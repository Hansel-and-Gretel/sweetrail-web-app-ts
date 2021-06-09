import { createSelector } from 'reselect'
import { RootState } from '../index'

const getUserState = (state: RootState) => state.userState

export const getIsLogin = createSelector(getUserState, state => state.auth.isLogin)
export const getAuth = createSelector(getUserState, state => state.auth)


// 회원가입이 정상적으로 처리 되었는지 get하는 쎌렉터
export const getIsMember = createSelector(getUserState, state => state.signUp.isMember)

