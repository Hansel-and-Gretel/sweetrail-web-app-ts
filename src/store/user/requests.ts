import axios from 'axios'
import { api, ApiResponse} from "../../lib/api"
import {API_URL} from '../../constants/env'
import {
    AuthType,
    LoginData,
    LoginResType,
    LogoutResType,
    SignUpData,
    SignUpResType,
    UserType
} from "../../types/user";
import {useCookies} from "react-cookie";
// @ts-ignore
import {get} from "lodash";

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

export const logoutUser = async () => {
    const data = await api.request<ApiResponse<LogoutResType>>({
        method: 'get',
        url: '/api/user/logout',
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

export const getAuth = async (token: string) => {

    const { data } = await axios({
        method: 'get',
        url: '/api/user/auth',
        withCredentials: true
    })
    return data
}


export const userDetail = async (id:string) => {
    const data = await api.request<ApiResponse<LogoutResType>>({
        method: 'get',
        url: `/api/user/user-info/${id}`,
    })
    return data
}

export const uploadProfileImg = async (formdata: FormData) => {
    const data = await api.request<ApiResponse<LogoutResType>>({
        method: 'post',
        url: `/api/user/profile-upload`,
        data: formdata
    })
    return data
}