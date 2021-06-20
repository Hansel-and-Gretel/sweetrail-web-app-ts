import { createSelector } from 'reselect'
import { RootState } from '../index'

const getPlaceState = (state: RootState) => state.placeState

export const getPlaceByJourney = createSelector(getPlaceState, state => state.place.placeList)
export const getAllPlaceList = createSelector(getPlaceState, state => state.allPlace.placeList)