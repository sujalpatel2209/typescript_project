import {Request, Response} from "express";
import {UserType} from "../interface/user.interface"
import authService from "../services/auth.service";
import {MESSAGES, STATUS_CODE} from "../lang/message";

const signIn = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;



    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({
            status: MESSAGES.FAIL,
            message: error,
        });
    }
}

const signUp = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, username, password }: UserType = req.body;

        const result = await authService.userSignUp({
            firstname, lastname, username, password,
        });

        if (result) {
            return res.status(STATUS_CODE.CREATED).send({
                status: MESSAGES.SUCCESS,
                message: MESSAGES.USER_SIGNUP,
            });
        }
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send({
            status: MESSAGES.FAIL,
            message: error,
        });
    }



}

export default {
    signIn,
    signUp,
}