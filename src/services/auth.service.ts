import {SignInType, UserType} from "../interface/user.interface";
import userRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";

const userSignUp = (signupDetail: UserType) => {
    return userRepository.userSignUp(signupDetail);
}

const userSignIn = (signInDetail: SignInType) => {
    return userRepository.userSignIn(signInDetail);
}

const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
}

const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 8);
}

export default {
    userSignUp,
    userSignIn,
    hashPassword,
    comparePassword,
}