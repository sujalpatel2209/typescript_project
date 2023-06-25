import {messageType, statusCode} from "../interface/message.interface";

export const MESSAGES: messageType = {
    SUCCESS: 'Success',
    FAIL: 'Fail',
    HEALTH_SUCCESS: 'Server health is okay.',

    USER_SIGNUP: 'User signed up successfully.',
}

export const STATUS_CODE: statusCode = {
    CREATED: 201
}