import { Request, Response } from 'express';
import {
  requestForwarder,
  sendAcknowledgement,
} from '../../utils/request.util';
import { OnSearchDTO } from './on_search.dto';

export default function onSearchController(req: Request, res: Response) {
  const onSearchDto: OnSearchDTO = req.body;
	console.log('Search callback triggered');
  sendAcknowledgement(res, 'ACK');
  return requestForwarder(onSearchDto);
}
