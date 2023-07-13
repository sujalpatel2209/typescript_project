export interface MessageType {
    SUCCESS: string,
    FAIL: string,
    HEALTH_SUCCESS: string,
    USER_SIGNUP: string,
    INTERNAL_SERVER_ERROR: string,
    RECORD_NOT_FOUND: string,
    UNAUTHENTICATED_USER: string,
}

export interface StatusCode {
    CREATED: number,
    SERVER_ERROR: number,
    OK: number,
    NOT_FOUND: number,
    UNAUTHENTICATED: number,
}