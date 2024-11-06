import 'dotenv/config';
import express from 'express';
import { router as userRouter } from './routes/v1/api.mjs'
import { verifyToken } from './routes/v1/middleware/jwt.mjs';

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('I am alive'));
app.use('/api/v1/', verifyToken, userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})