import 'dotenv/config';
import express from 'express';
import { router as userRouter } from './routes/v1/user-router.mjs';
import { router as tokenRouter } from './routes/v1/token-router.mjs';
import { router as authRouter } from './routes/v1/auth-router.mjs';


import { verifyToken } from './routes/v1/middleware/jwt.mjs';
import bodyParser from 'body-parser';

const app = express();

const port = 3000;

/* GLOBAL MIDDLEWARE */
app.use(bodyParser.json());

/* PUBLIC ROUTES */
app.get('/', (req, res) => res.send('I am alive'));
app.use('/api/v1/token/', tokenRouter);
app.use('/api/v1/auth', authRouter);

/* PROTECTED ROUTES */
app.use('/api/v1/users/', verifyToken, userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});