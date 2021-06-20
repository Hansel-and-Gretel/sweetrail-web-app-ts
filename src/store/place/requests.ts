import {api, ApiResponse} from "../../lib/api";
import axios from "axios";
import {Place} from "../../types/place";

/** 전체 장소 가져오기 **/
export const getAllPlaceList = async () => {
    const { data } = await api.request<ApiResponse<Place[]>>({
        method: 'get',
        url: `/api/place/list`
    })
    return data
}

/** Journey 별 places**/
export const getPlaceListByJourney = async (id: number ) => {
    const { data } = await api.request<ApiResponse<Place[]>>({
        method: 'get',
        url: `/api/place/journey/${id}`
    })
    return data
}