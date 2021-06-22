import { createSelector } from 'reselect'
import { RootState } from '../index'

const getJourneyState = (state: RootState) => state.journeyState

// export const getMyJourneyList = createSelector(getJourneyState, state => state.myJourneyList)
export const getJourneyDetail = createSelector(getJourneyState, state => state.journeyDetail.journey)
export const getProfileJourneyList = createSelector(getJourneyState, state => state.profileJourneyList)
export const getMainJourneyList = createSelector(getJourneyState, state => state.mainJourneyList)
export const getStyleJourneyList = createSelector(getJourneyState, state => state.styleJourneyList)
export const getAccompanyJourneyList = createSelector(getJourneyState, state => state.accompanyJourneyList)