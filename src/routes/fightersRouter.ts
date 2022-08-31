
import { Router } from 'express';
import { initBatle } from '../controllers/batleControllers';

const router = Router();

router.post('/battle', initBatle );


export default router;