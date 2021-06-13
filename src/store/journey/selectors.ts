import { createSelector } from 'reselect'
import { RootState } from '../index'

const getJourneyState = (state: RootState) => state.journeyState

// export const getMyJourneyList = createSelector(getJourneyState, state => state.myJourneyList)
export const getJourneyDetail = createSelector(getJourneyState, state => state.journeyDetail.journey)