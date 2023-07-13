import {MessageType, StatusCode} from "../interface/message.interface";

export const MESSAGES: MessageType = {
    SUCCESS: 'Success',
    FAIL: 'Fail',
    HEALTH_SUCCESS: 'Server health is okay.',

    RECORD_NOT_FOUND: 'Record not found.',
    INTERNAL_SERVER_ERROR: 'Internal Server Error.',
    UNAUTHENTICATED_USER: 'Username and password invalid.',

    USER_SIGNUP: 'User signed up successfully.',
}

export const STATUS_CODE: StatusCode = {
    CREATED: 201,
    SERVER_ERROR: 500,
    OK: 200,
    NOT_FOUND: 404,
    UNAUTHENTICATED: 401,
}