import {UserType} from "../interface/user.interface";
import db from "../config/connection";

const userSignUp = async (signupDetail: UserType) => {
    const query: string = `INSERT INTO user (first_name, last_name, username, password) VALUES (?, ?, ?, ?)`;
    return await db.query(db.connection, query, [
        signupDetail.firstname, signupDetail.lastname, signupDetail.username, signupDetail.password
    ]);
}

export default {
    userSignUp
}