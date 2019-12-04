import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/loginController';
import { router } from './routes/loginRoutes';
import { router as controllerRouter } from './controllers/decorators/controller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lol'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
