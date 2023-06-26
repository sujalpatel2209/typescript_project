import {MessageType, StatusCode} from "../interface/message.interface";

export const MESSAGES: MessageType = {
    SUCCESS: 'Success',
    FAIL: 'Fail',
    HEALTH_SUCCESS: 'Server health is okay.',

    USER_SIGNUP: 'User signed up successfully.',
}

export const STATUS_CODE: StatusCode = {
    CREATED: 201
}