import axios from 'axios'
import { api, ApiResponse} from "../../lib/api"
import {API_URL} from '../../constants/env'
import {LoginData, LoginResType, SignUpData, SignUpResType, UserType} from "../../types/user";


export const loginUser = async (form: LoginData) => {
    const { data } = await api.request<ApiResponse<LoginResType>>({
        method: 'post',
        url: '/api/user/login',
        data: form
    })
    return data
}

export const signupUser = async (form: SignUpData) => {
    const { data } = await api.request<ApiResponse<SignUpResType>>({
        method: 'post',
        url: '/api/user/register',
        data: form
    })
    return data
}

