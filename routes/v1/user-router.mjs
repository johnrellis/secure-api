'use strict';

import { Router } from 'express';
import { UserController } from './controllers/user-controller.mjs';
import { UserService } from './services/user-service.mjs';
import { UserStorage } from './storage/user-storage.mjs';

const router = Router();

const userService = new UserService(new UserStorage());
const userController = new UserController(userService);

router.get('/:id', async (req, res) => {
  const { status, body } = await userController.getUserById(req, res);
  return res.status(status).send(body);
});

export { router };