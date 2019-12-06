import { Request, Response } from 'express';

import { controller, get } from './decorators';

controller('');
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">logout</a>
        </div>
      `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/auth/login">login</a>
      </div>
    `);
    }
  }
}
