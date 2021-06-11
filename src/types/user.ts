export interface LoginResType {
    isLogin: boolean;
    message: string;
    user: {
        userId: number;
        userName: string;
        userImg: string;
        journeyType: string;
        lifeStyle: string;
        token: string;
    }
}
export interface SignUpResType {
    registerSuccess: boolean
}

export interface LogoutResType {
    logoutSuccess: boolean
}

export interface AuthType {
    isAuth: boolean;
    userId: number;
    userName: string;
    userImg: string;
    journeyType: string;
    lifeStyle: string;
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
    lifeStyle: string,
    journeyType: string
}