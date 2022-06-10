import { Router } from 'express';
import { insertURL, getUrl, getNewUrl, deleteNewUrl } from '../controllers/urlController.js';
import { validateToken } from '../middlewares/validateToken.js';
import validateURL from '../middlewares/validateURL.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten', validateToken, validateURL, insertURL);
urlRouter.get('/urls/:id', getUrl);
urlRouter.get('/urls/open/:shortUrl', getNewUrl);
urlRouter.delete('/urls/:id', validateToken, deleteNewUrl);

export default urlRouter;

