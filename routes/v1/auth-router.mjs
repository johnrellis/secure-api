'use strict';

import { Router } from 'express';
import { AuthController } from './controllers/auth-controller.mjs';
import { TokenService } from './services/token-service.mjs';
import { UserService } from './services/user-service.mjs';
import { UserStorage } from './storage/user-storage.mjs';

const router = Router();

const userService = new UserService(new UserStorage());
const tokenService = new TokenService();
const authController = new AuthController(userService, tokenService);

router.post('/login', async (req, res) => {
  const { status, body } = await authController.login(req, res);
  return res.status(status).send(body);
});

export { router };