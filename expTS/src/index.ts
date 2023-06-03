import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger';
import router from './router/router';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
const publicPath = `${process.cwd()}/public`;
const rootPath = process.cwd();

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers.ts`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(
  sass({
    src: `${publicPath}/scss`,
    dest: `${publicPath}/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

console.log(process.cwd());

app.use(logger('completo'));

app.use(router);

app.use('/css', express.static(`${publicPath}/css`));

app.use(
  '/js',
  express.static(`${publicPath}/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js`),
);

app.use('/img', express.static(`${publicPath}/img`));
app.use(
  '/webfonts',
  express.static(
    `${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`,
  ),
);

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
