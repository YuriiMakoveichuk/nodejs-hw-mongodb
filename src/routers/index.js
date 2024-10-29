import { Router } from 'express';
import contactsRouter from './contacts.js';
import userRouter from './auth.js';

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/auth', userRouter);

export default router;
