import {createAction, createAsyncAction} from 'typesafe-actions'
import {Journey} from "../../types/journey";

export const fetchMyJourneyListAsync = createAsyncAction(
    "FETCH_MY_JOURNEY_LIST_REQUEST",
    "FETCH_MY_JOURNEY_LIST_RESPONSE",
    "FETCH_MY_JOURNEY_LIST_FAILURE"
)<{id: string}, Journey, undefined>();