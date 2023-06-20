import {userType} from "../interface/user.interface";
import userRepository from "../repositories/user.repository";

const userSignUp = (signupDetail: userType) => {
    return userRepository.userSignUp(signupDetail);
}

export default {
    userSignUp
}