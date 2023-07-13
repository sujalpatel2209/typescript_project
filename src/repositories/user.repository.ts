import {SignInType, UserType} from "../interface/user.interface";
import db from "../config/connection";
import authService from "../services/auth.service";

const userSignUp = async (signupDetail: UserType) => {
    const {firstname, lastname, username, password} = signupDetail;

    const query: string = 'INSERT INTO user (first_name, last_name, username, password) VALUES (?, ?, ?, ?)';
    const result = await db.query(db.connection, query, [
        firstname,
        lastname,
        username,
        await authService.hashPassword(password),
    ]);
    // @ts-ignore
    return result.insertId;
}

const userSignIn = async (signInDetail: SignInType) => {
    const {username} = signInDetail;

    const query: string = 'SELECT username, password FROM user WHERE username = ?';
    const result = await db.query(db.connection, query, [
        username,
    ]);
    // @ts-ignore
    return result.length > 0 ? result[0] : false;
}

export default {
    userSignUp,
    userSignIn,
}