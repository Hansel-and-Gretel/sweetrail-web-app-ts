import {createAction, createAsyncAction} from 'typesafe-actions'
import {Journey} from "../../types/journey";

/* ID 로 해당 여정 디테일 가져오기 */
export const getJourneyDetailAsync = createAsyncAction(
    "GET_JOURNEY_DETAIL_REQUEST",
    "GET_JOURNEY_DETAIL_RESPONSE",
    "GET_JOURNEY_DETAIL_FAILURE"
)<{id: number}, Journey, undefined>();
//
// export const fetchMyJourneyListAsync = createAsyncAction(
//     "FETCH_MY_JOURNEY_LIST_REQUEST",
//     "FETCH_MY_JOURNEY_LIST_RESPONSE",
//     "FETCH_MY_JOURNEY_LIST_FAILURE"
// )<{id: string}, Journey, undefined>();
//
// export const uploadJourneyAsync = createAsyncAction(
//     "UPLOAD_JOURNEY_REQUEST",
//     "UPLOAD_JOURNEY_RESPONSE",
//     "UPLOAD_JOURNEY_FAILURE"
// )<{formdata : undefined}, Journey, undefined>();


