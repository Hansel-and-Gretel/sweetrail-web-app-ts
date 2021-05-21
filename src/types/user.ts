export interface LoginResType {
    isLogin: boolean;
}
export interface SignUpResType {
    registerSuccess: boolean
}

export interface UserType {
    userName: string;
    email: string;
    password: string | null;
    token: string | null;
    lifeStyle: string | null;
    journeyType: string;
    image: string;
}

export interface LoginData {
    email: string,
    password: string,
}

export interface SignUpData {
    userName: string,
    email: string,
    password: string,
    lifestyle: string,
    journeytype: string
}