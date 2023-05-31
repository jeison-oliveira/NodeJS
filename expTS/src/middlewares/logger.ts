import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import { appendFile } from 'fs';

function logger(tipo: Tipo) {
  const logPath = `${process.cwd()}/log`;

  return (req: Request, res: Response, next: NextFunction) => {
    let log = '';
    if (tipo === 'completo') {
      log = `${new Date().toISOString()} ${req.url} ${
        req.httpVersion
      } ${req.get('User-Agent')}\n`;
    } else {
      log = `${new Date().toISOString()} ${req.url}\n`;
    }
    appendFile(`${logPath}/log.log`, log, 'utf8', (err) => {
      // When a request is aborted - the callback is called with an AbortError
      if (err) console.log('Não foi possível gravar o log');
      next();
    });
  };
}

export default logger;
