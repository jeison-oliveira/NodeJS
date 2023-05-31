import { Router, Request, Response } from 'express';

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('/page', (req, res) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

router.get('/', (req: Request, res: Response) => {
  res.end('Welcome to Web Academy!');
});

router.get('/bemvindo/:nome', (req, res) => {
  res.send(`Bem vindo, ${req.params.nome}`);
});

router.get('/lorem', (req, res) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

export default router;
