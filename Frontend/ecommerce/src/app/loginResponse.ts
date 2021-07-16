export interface LoginResponse{
    id: string,
    username: string,
    name: string,
    email: number,
    roles: string[],
    accessToken : string,
    tokenType: string
}