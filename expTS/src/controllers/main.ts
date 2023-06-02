import { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

const welcome = (req: Request, res: Response) => {
  res.end('Welcome to Web Academy!');
};

const bemvindo = (req: Request, res: Response) => {
  res.send(`Bem vindo, ${req.params.nome}`);
};

const lorem = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    uf: 'Universidade Federal do Amazonas',
  });
};

const hb2 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 124 },
    { nome: 'Horácio', sala: 124 },
    { nome: 'Edleno', sala: 124 },
    { nome: 'Souto', sala: 124 },
  ];
  res.render('main/hb2', {
    profs,
  });
};

const hb3 = (req: Request, res: Response) => {
  res.render('main/hb3', {
    nome: 'Express',
    tipo: 'Framework',
    poweredByNode: true,
  });
};

const hb4 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 124 },
    { nome: 'Horácio', sala: 125 },
    { nome: 'Edleno', sala: 128 },
    { nome: 'Souto', sala: 15 },
  ];
  res.render('main/hb4', {
    profs,
  });
};

const hb5 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 124 },
    { nome: 'Horácio', sala: 125 },
    { nome: 'Edleno', sala: 128 },
    { nome: 'Souto', sala: 15 },
  ];
  res.render('main/hb4', {
    profs,
  });
};

export default { bemvindo, lorem, hb1, hb2, hb3, hb4, welcome };
