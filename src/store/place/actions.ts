import {createAction, createAsyncAction} from 'typesafe-actions'
import {Place} from "../../types/place";

/* ID 로 해당 여정 디테일 가져오기 */
export const getPlaceByJourneyAsync = createAsyncAction(
    "GET_PLACE_BY_JOURNEY_REQUEST",
    "GET_PLACE_BY_JOURNEY_RESPONSE",
    "GET_PLACE_BY_JOURNEY_FAILURE"
)<{id: number}, Place[], undefined>();


/* 전체 여정 가져오기 */
export const getAllPlaceAsync = createAsyncAction(
    "GET_ALL_PLACE_REQUEST",
    "GET_ALL_PLACE_RESPONSE",
    "GET_ALL_PLACE_FAILURE"
)<{id: number}, Place[], undefined>();