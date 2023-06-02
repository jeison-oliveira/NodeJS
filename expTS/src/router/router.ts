import { Router, Request, Response } from 'express';
import mainControler from '../controllers/main';

const router = Router();

router.get('/', mainControler.welcome);

router.get('/bemvindo/:nome', mainControler.bemvindo);

router.get('/lorem', mainControler.lorem);

router.get('/hb1', mainControler.hb1);

router.get('/hb2', mainControler.hb2);

router.get('/hb3', mainControler.hb3);

router.get('/hb4', mainControler.hb4);

router.get('/hb5', mainControler.hb5);

export default router;
