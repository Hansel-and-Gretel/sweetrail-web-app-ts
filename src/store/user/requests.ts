import axios from 'axios'
import { api, ApiResponse} from "../../lib/api"
import {API_URL} from '../../constants/env'
import {AuthType, LoginData, LoginResType, SignUpData, SignUpResType, UserType} from "../../types/user";


export const loginUser = async (form: LoginData) => {
    const data = await api.request<ApiResponse<LoginResType>>({
        method: 'post',
        url: '/api/user/login',
        data: form
    })
    // const res = await axios.post('http://localhost:5000/api/user/login', {...form})
    // console.log(res.headers['x_token'])
    return data
    // return res
}

export const signupUser = async (form: SignUpData) => {
    const { data } = await api.request<ApiResponse<SignUpResType>>({
        method: 'post',
        url: '/api/user/register',
        data: form
    })
    return data
}

export const getAuth = async () => {
    const { data } = await api.request<ApiResponse<AuthType>>({
        method: 'get',
        url: '/api/user/auth',
    })
    return data
}
