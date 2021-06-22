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

export const getMyJourneyList = async (id: string) => {
    const { data } = await api.request<ApiResponse<Journey[]>>({
        method: 'get',
        url: `/api/journey/mypage/${id}`
    })
    return data
}

export const getOtherJourneyList = async (id: string) => {
    const { data } = await api.request<ApiResponse<Journey[]>>({
        method: 'get',
        url: `/api/journey/otherpage/${id}`
    })
    return data
}

export const getMainJourneyList = async () => {
    const { data } = await api.request<ApiResponse<Journey[]>>({
        method: 'get',
        url: `/api/journey/main`
    })
    return data
}

export const getStyleJourneyList = async (type: string) => {
    const { data } = await api.request<ApiResponse<Journey[]>>({
        method: 'get',
        url: `/api/journey/style/${type}`
    })
    return data
}

export const getAccompanyJourneyList = async (accompany: string) => {
    const { data } = await api.request<ApiResponse<Journey[]>>({
        method: 'get',
        url: `/api/journey/accompany/${accompany}`
    })
    return data
}
