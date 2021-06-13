import axios from 'axios'
import { api, ApiResponse} from "../../lib/api"
import {API_URL} from '../../constants/env'
import {Journey} from "../../types/journey"


export const getJourneyDetail = async (id: number) => {
    const { data } = await api.request<ApiResponse<Journey>>({
        method: 'get',
        url: `/api/journey/detail/${id}`
    })
    return data
}

// export const getMyJourneyList = async (id: string) => {
//     const { data } = await api.request<ApiResponse<Journey[]>>({
//         method: 'get',
//         url: `/api/journey/mypage/${id}`
//     })
//     return data
// }

