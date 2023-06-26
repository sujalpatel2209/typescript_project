import {Request, Response} from "express";
import {UserType} from "../interface/user.interface"
import authService from "../services/auth.service";
import {MESSAGES, STATUS_CODE} from "../lang/message";

const signIn = async (req: Request, res: Response) => {
    res.send({
        req: req.body,
    });
}

const signUp = async (req: Request, res: Response) => {
    const { firstname, lastname, username, password }: UserType = req.body;

    await authService.userSignUp({
        firstname, lastname, username, password,
    });
    return res.status(STATUS_CODE.CREATED).send({
        status: MESSAGES.SUCCESS,
        message: MESSAGES.USER_SIGNUP,
    });

}

export default {
    signIn,
    signUp,
}