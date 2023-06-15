import {Request, Response} from "express";
import {MESSAGES} from "../lang/message";

const healthCheck = (req: Request, res: Response) => {
    res.send({
        health: MESSAGES.HEALTH_SUCCESS,
    });
}

export default { healthCheck };