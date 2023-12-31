import Express from 'express';
import onSearchController from './on_search/on_search.controller';

const router = Express.Router();

router.get('/', (_req, res) => {
  res.send('Welcome to SOAL BAP!');
});

router.post('/on_search', onSearchController);

export default router;
