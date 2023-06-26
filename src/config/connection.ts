import db from 'mysql2';
import dotenv from 'dotenv';
import {DbConfigType} from "../interface/db.interface";

dotenv.config();

const dbConfig: DbConfigType = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

const connection: db.Connection = db.createConnection(dbConfig);

connection.connect((error: db.QueryError | null): void => {
    if (error) {
        throw error;
    }
});

const query = async (con: db.Connection, sqlQuery: string, params: any) => {
    return new Promise((resolve, reject) => {
        con.query(sqlQuery, params, (err: db.QueryError | null, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

export default {connection, query};