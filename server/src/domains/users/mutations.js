import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

// DB
import { db } from './db';

// Config
import { USER_SECRET } from '../../init/config';

export const mutations = {
  signUp: (_, user) => {
    db.push(user);

    return user;
  },
  login: (_, { name, password }, ctx) => {
    const user = db.find((currentUser) => currentUser.name === name);
    const isUserValid = user && (user.password === password);

    if (!user) {
      throw new AuthenticationError('The user with this name does not exist');
    }

    if (!isUserValid) {
      throw new AuthenticationError('The password is wrong');
    }

    const token = jwt.sign({ username: name }, USER_SECRET);
    ctx.req.session.token = token;

    return user;
  },
}
