import jwt from 'jsonwebtoken';

// Config
import { USER_SECRET } from './config';

export const readToken = (req, _, next) => {
  const { token } = req.session;

  if (token) {
    const { username } = jwt.verify(token, USER_SECRET);

    req.username = username;
  }

  next();
}
