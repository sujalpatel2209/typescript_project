import express, {Router} from 'express';
import health from "../controller/health.controller";
import auth from "../controller/auth.controller";

const router:Router = express.Router();

router.get('/health', health.healthCheck);
router.post('/user/sign_in', auth.signIn);
router.post('/user/sign_up', auth.signUp);

export default router;