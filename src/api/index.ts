import Express from 'express';
import onSearchController from './on_search/on_search.controller';

const router = Express.Router();

router.get('/', (_req, res) => {
  res.send('Up & running...');
});

router.post('/on_search', onSearchController);

export default router;
