import axios from 'axios'
import { api, ApiResponse} from "../../lib/api"
import {API_URL} from '../../constants/env'
import {AuthType, LoginData, LoginResType, LogoutResType, SignUpData, SignUpResType, UserType} from "../../types/user";
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
        url: `http://ec2-3-22-119-236.us-east-2.compute.amazonaws.com:5000/api/user/auth`,
        withCredentials: true
    })
    return data
}

