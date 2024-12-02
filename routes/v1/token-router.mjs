'use strict';

import { Router } from 'express';
import { TokenController } from './controllers/token-controller.mjs';
import { TokenService } from './services/token-service.mjs';



const router = Router();

const tokenService = new TokenService();
const tokenController = new TokenController(tokenService);

router.post('/', async (req, res) => {
  const { status, body } = await tokenController.createToken(req, res);
  return res.status(status).send(body);
});

export { router };