interface signInType {
    username: string,
    password: string,
}

export interface userType extends signInType {
    firstname: string,
    lastname: string,
}