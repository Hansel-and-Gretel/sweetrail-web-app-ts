import {createAction, createAsyncAction} from 'typesafe-actions'
import {Journey} from "../../types/journey";

/* ID 로 해당 여정 디테일 가져오기 */
export const getJourneyDetailAsync = createAsyncAction(
    "GET_JOURNEY_DETAIL_REQUEST",
    "GET_JOURNEY_DETAIL_RESPONSE",
    "GET_JOURNEY_DETAIL_FAILURE"
)<{id: number}, Journey, undefined>();

/* 나의 journey */
export const fetchMyJourneyListAsync = createAsyncAction(
    "FETCH_MY_JOURNEY_LIST_REQUEST",
    "FETCH_MY_JOURNEY_LIST_RESPONSE",
    "FETCH_MY_JOURNEY_LIST_FAILURE"
)<{id: string}, Journey[], undefined>();

/* 다른사용자의 journey */
export const fetchOtherJourneyListAsync = createAsyncAction(
    "FETCH_OTHER_JOURNEY_LIST_REQUEST",
    "FETCH_OTHER_JOURNEY_LIST_RESPONSE",
    "FETCH_OTHER_JOURNEY_LIST_FAILURE"
)<{id: string}, Journey[], undefined>();

/* 최신순 전체 journey */
export const fetchMainJourneyListAsync = createAsyncAction(
    "FETCH_MAIN_JOURNEY_LIST_REQUEST",
    "FETCH_MAIN_JOURNEY_LIST_RESPONSE",
    "FETCH_MAIN_JOURNEY_LIST_FAILURE"
)<undefined, Journey[], undefined>();

/* type 별 journey */
export const fetchStyleJourneyListAsync = createAsyncAction(
    "FETCH_STYLE_JOURNEY_LIST_REQUEST",
    "FETCH_STYLE_JOURNEY_LIST_RESPONSE",
    "FETCH_STYLE_JOURNEY_LIST_FAILURE"
)<{type: string}, Journey[], undefined>();

/* 동행 별 journey */
export const fetchAccompanyJourneyListAsync = createAsyncAction(
    "FETCH_AMP_JOURNEY_LIST_REQUEST",
    "FETCH_AMP_JOURNEY_LIST_RESPONSE",
    "FETCH_AMP_JOURNEY_LIST_FAILURE"
)<{accompany: string}, Journey[], undefined>();

