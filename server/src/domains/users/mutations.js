import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

// DB
import { db } from './db';

// Config
import { USER_SECRET } from '../../init/config';

export const mutations = {
  signUp: (_, user) => {
    const existedUser = db.find(({ name, email }) => (user.name === name) && (user.email === email));

    if (!existedUser) {
      db.push(user);

      return user;
    } else {
      throw new AuthenticationError('The user with these name and email has already exists. Please, log in');
    }
  },
  login: (_, { name, password }, ctx) => {
    const user = db.find((currentUser) => currentUser.name === name);
    const isUserValid = user && (user.password === password);

    if (!user) {
      throw new AuthenticationError('The user with this name does not exist. Please, sign up');
    }

    if (!isUserValid) {
      throw new AuthenticationError('The password is wrong');
    }

    const token = jwt.sign({ username: name }, USER_SECRET);
    ctx.req.session.token = token;

    return user;
  },
}
