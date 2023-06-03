import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './router/router';
import { engine } from 'express-handlebars';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
const publicPath = `${process.cwd()}/public`;

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers.ts`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

console.log(process.cwd());

app.use(logger('completo'));

app.use(router);

app.use('/css', express.static(`${publicPath}/css`));

app.use('/js', express.static(`${publicPath}/js`));

app.use('/img', express.static(`${publicPath}/img`));

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
