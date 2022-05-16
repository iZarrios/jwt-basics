import express from "express";

import authenticationMiddleware from '../middleware/auth.js';
import { login, dashboard } from '../controllers/main.js';

const router = express.Router();

router.route('/dashboard').get(authenticationMiddleware, dashboard);
router.route('/login').post(login);

export default router;