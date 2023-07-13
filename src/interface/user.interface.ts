export interface SignInType {
    username: string,
    password: string,
}

export interface UserType extends SignInType {
    firstname: string,
    lastname: string,
}