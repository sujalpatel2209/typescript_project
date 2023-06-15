import express, {Request, Response, Router} from 'express';
import health from "../controller/health.controller";

const router:Router = express.Router();

router.get('/health', health.healthCheck);

export default router;