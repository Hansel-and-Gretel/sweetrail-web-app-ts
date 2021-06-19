import {createReducer, ActionType } from "typesafe-actions";
import * as actions from './actions'
import {Journey} from "../../types/journey";

export type Actions = ActionType<typeof actions>

export interface JourneyState {
    journeyDetail: {
        journey: Journey,
        loading: boolean
    },
    profileJourneyList: {
        who: 'my' | 'other'; //내 프로필, 타인 프로필
        data: Journey[];
        loading: boolean;
    },
    mainJourneyList: {
        data: Journey[];
        loading: boolean;
    },
    styleJourneyList: {
        data: Journey[];
        loading: boolean;
    },
    accompanyJourneyList: {
        data: Journey[];
        loading: boolean;
    }

}

const initialState: JourneyState = {
    journeyDetail: {
        journey: {
            journeyName: '',
            type: '',
            accompany: '',
            pinFrequency: 10,
            summary: '',
            image: '/image/journey/default.png',
            status: 0,
            sharedFlag: 1,
            userId: null,
            userName: '',
            createdAt: '',
            updatedAt: ''
        },
        loading: false
    },
    profileJourneyList: {
        who: 'my',
        data: [],
        loading: false
    },
    mainJourneyList: {
        data: [],
        loading: false
    },
    styleJourneyList: {
        data: [],
        loading: false
    },
    accompanyJourneyList: {
        data: [],
        loading: false
    }
}

export default createReducer<JourneyState, Actions>(initialState)
    .handleAction(actions.getJourneyDetailAsync.request, (state) => ({...state, journeyDetail: { ...state.journeyDetail,}}))
    .handleAction(actions.getJourneyDetailAsync.success, (state, action) => ({...state, journeyDetail: {
            journey: {
                journeyName: action.payload.journeyName,
                type: action.payload.type,
                accompany: action.payload.accompany,
                pinFrequency: action.payload.pinFrequency,
                summary: action.payload.summary,
                image: action.payload.image,
                status: action.payload.status,
                sharedFlag: action.payload.sharedFlag,
                userId: action.payload.userId,
                userName: action.payload.userName,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt
            },
            loading: false }}))
    .handleAction(actions.fetchMyJourneyListAsync.request, (state) => ({...state, profileJourneyList: { ...state.profileJourneyList, who: 'my', loading: true }}))
    .handleAction(actions.fetchMyJourneyListAsync.success, (state, action) => ({...state, profileJourneyList: { who: 'my', data: action.payload, loading: false }}))
    .handleAction(actions.fetchOtherJourneyListAsync.request, (state) => ({...state, profileJourneyList: { ...state.profileJourneyList, who: 'other', loading: true }}))
    .handleAction(actions.fetchOtherJourneyListAsync.success, (state, action) => ({...state, profileJourneyList: { who: 'other', data: action.payload, loading: false }}))
    .handleAction(actions.fetchMainJourneyListAsync.request, (state) => ({...state, mainJourneyList: { ...state.mainJourneyList, loading: true }}))
    .handleAction(actions.fetchMainJourneyListAsync.success, (state, action) => ({...state, mainJourneyList: { data: action.payload, loading: false }}))
    .handleAction(actions.fetchStyleJourneyListAsync.request, (state) => ({...state, styleJourneyList: { ...state.styleJourneyList, loading: true }}))
    .handleAction(actions.fetchStyleJourneyListAsync.success, (state, action) => ({...state, styleJourneyList: { data: action.payload, loading: false }}))
    .handleAction(actions.fetchAccompanyJourneyListAsync.request, (state) => ({...state, accompanyJourneyList: { ...state.accompanyJourneyList, loading: true }}))
    .handleAction(actions.fetchAccompanyJourneyListAsync.success, (state, action) => ({...state, accompanyJourneyList: { data: action.payload, loading: false }}))