import {UserType} from "../interface/user.interface";
import db from "../config/connection";
import bcrypt from 'bcrypt';
import {Response} from "express";

const userSignUp = async (signupDetail: UserType) => {
    const {firstname, lastname, username, password} = signupDetail;

    const bcryptPassword: string = await bcrypt.hash(password, 8);

    const query: string = 'INSERT INTO user (first_name, last_name, username, password) VALUES (?, ?, ?, ?)';
    const result = await db.query(db.connection, query, [
        firstname,
        lastname,
        username,
        bcryptPassword,
    ]);
    // @ts-ignore
    return result.insertId;
}

export default {
    userSignUp
}