import {userType} from "../interface/user.interface";
import db from "../config/connection";
import connection from "../config/connection";

const userSignUp = async (signupDetail: userType) => {
    const query: string = 'INSERT INTO user (first_name, last_name, username, password) VALUES (?, ?, ?, ?)';
    const result = await db.query(db.connection, query, [
        signupDetail.firstname, signupDetail.lastname, signupDetail.username, signupDetail.password
    ]);
    return result;
}

export default {
    userSignUp
}