export interface UserLoginModel {
    username?: string;
    password?: string;
}

export interface LoginResponse {
    id?:   number;
    role?: string;
}