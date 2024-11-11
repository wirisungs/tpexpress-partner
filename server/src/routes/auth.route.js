import { loginUser, registerUser, logoutUser, verifyToken } from '../controllers/auth.controller.js';
import express from 'express';
const authRoutes = express.Router();

authRoutes.post('/login', loginUser);
authRoutes.post('/register', registerUser);
authRoutes.post('/logout', logoutUser);
authRoutes.post('/verify-token', verifyToken);

export default authRoutes;
