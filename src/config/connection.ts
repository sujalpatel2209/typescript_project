import db from 'mysql2';
import dotenv from 'dotenv';
import {dbConfigType} from "../interface/db.interface";

dotenv.config();

const dbConfig: dbConfigType = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

const connection: db.Connection = db.createConnection(dbConfig);

connection.connect((error: db.QueryError | null): void => {
    if(error) {
        throw error;
    }
});

export default connection;