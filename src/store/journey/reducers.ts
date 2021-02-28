import {createReducer, ActionType } from "typesafe-actions";
import * as actions from './actions'
import {Journey} from "../../types/journey";

export type Actions = ActionType<typeof actions>

export interface JourneyState {
    myJourneyList: {
        data: Journey[];
        loading: boolean;
    }
}

const initialState: JourneyState = {
    myJourneyList: {
        data: [],
        loading: false
    }
}

export default createReducer<JourneyState, Actions>(initialState)
    .handleAction(actions.fetchMyJourneyListAsync.request, (state) => ({...state, myJourneyList: { ...state.myJourneyList, loading: true }}))
    .handleAction(actions.fetchMyJourneyListAsync.success, (state, action) => ({...state, myJourneyDetail: { data: action.payload, loading: false }}))