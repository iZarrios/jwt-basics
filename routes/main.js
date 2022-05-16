import express from "express";

const router = express.Router();


import { login, dashboard } from '../controllers/main.js';

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);

export default router;