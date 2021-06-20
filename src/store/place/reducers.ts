import {createReducer, ActionType } from "typesafe-actions";
import * as actions from './actions'
import {Place} from "../../types/place";

export type Actions = ActionType<typeof actions>

export interface PlaceState {
    place: {
        loading: boolean,
        placeList: Place[]
    },
    allPlace: {
        loading: boolean,
        placeList: Place[]
    }
}

const initialState: PlaceState = {
    place: {
        loading: false,
        placeList:[]
    },
    allPlace: {
        loading: false,
        placeList: []
    }
}

export default createReducer<PlaceState, Actions>(initialState)
    .handleAction(actions.getPlaceByJourneyAsync.request, (state) => ({...state, place: { ...state.place, loading: true }}))
    .handleAction(actions.getPlaceByJourneyAsync.success, (state, action) => ({...state, place: { ...state.place,
            placeList: action.payload,
            loading: false
        }}))
    .handleAction(actions.getAllPlaceAsync.request, (state) => ({...state, allPlace: { ...state.allPlace, loading: true }}))
    .handleAction(actions.getAllPlaceAsync.success, (state, action) => ({...state, allPlace: { ...state.allPlace,
            placeList: action.payload,
            loading: false
        }}))