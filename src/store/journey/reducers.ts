import {createReducer, ActionType } from "typesafe-actions";
import * as actions from './actions'
import {Journey} from "../../types/journey";

export type Actions = ActionType<typeof actions>

export interface JourneyState {
    journeyDetail: {
        journey: Journey,
        loading: boolean
    },
    // myJourneyList: {
    //     data: Journey[];
    //     loading: boolean;
    // },

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
    // myJourneyList: {
    //     data: [],
    //     loading: false
    // }
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
    // .handleAction(actions.fetchMyJourneyListAsync.request, (state) => ({...state, myJourneyList: { ...state.myJourneyList, loading: true }}))
    // .handleAction(actions.fetchMyJourneyListAsync.success, (state, action) => ({...state, myJourneyDetail: { data: action.payload, loading: false }}))
