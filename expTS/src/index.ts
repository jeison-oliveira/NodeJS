import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './router/router';
dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
const publicPath = `${process.cwd()}/public`;
console.log(process.cwd());

app.use(logger('completo'));

app.use(router);

app.use('/css', express.static(`${publicPath}/css`));

app.use('/js', express.static(`${publicPath}/js`));

app.use('/img', express.static(`${publicPath}/img`));

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
