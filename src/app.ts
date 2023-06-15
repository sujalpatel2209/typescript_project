import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import appRoutes from './routes/index';

dotenv.config();
const app: Express = express();
const PORT: string | undefined = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

appRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});