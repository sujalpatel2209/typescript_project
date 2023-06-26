import {UserType} from "../interface/user.interface";
import userRepository from "../repositories/user.repository";

const userSignUp = (signupDetail: UserType) => {
    return userRepository.userSignUp(signupDetail);
}

export default {
    userSignUp
}