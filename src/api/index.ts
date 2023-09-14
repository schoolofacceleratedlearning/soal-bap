import Express from 'express';
import onSearchController from './on_search/on_search.controller';

const router = Express.Router();

router.get('/', (_req, res) => {
  res.send('Welcome to SOAL BAP!');
});

router.post('/', (_req, res) => {
  console.log(
    'Request Received in BAP Initial Request Controller**************',
  );
  res
    .json({
      message: {
        ack: 'ACK',
      },
    })
    .status(200);
});

router.post('/on_search', onSearchController);

export default router;
