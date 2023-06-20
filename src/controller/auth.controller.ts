import {Request, Response} from "express";
import {userType} from "../interface/user.interface"
import authService from "../services/auth.service";

const signIn = async (req: Request, res: Response) => {
    res.send({
        req: req.body,
    });
}

const signUp = async (req: Request, res: Response) => {
    const { firstname, lastname, username, password }: userType = req.body;

    return authService.userSignUp({
        firstname, lastname, username, password,
    });

}

export default {
    signIn,
    signUp,
}