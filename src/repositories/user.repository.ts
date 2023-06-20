import {userType} from "../interface/user.interface";
import db from "../config/connection";
import {Query, QueryError} from "mysql2";

const userSignUp = async (signupDetail: userType) => {
    const query: string = 'INSERT INTO user (firstName, lastName, username, password) VALUES (?, ?, ?, ?)';
    let data:number | null;

    await db.query(query, (error: QueryError, result) => {
        if (error) throw new Error(error.message);
        data = result;
    });
    return data;
}

export default {
    userSignUp
}