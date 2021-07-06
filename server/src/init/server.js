import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import session from 'express-session';
import cors from 'cors';

// Config
import { sessionOptions, corsOptions } from './config';

// Middleware
import { readToken } from './readToken';

// Schema
import schema from './types.gql';

// Resolvers
import { resolvers } from './resolvers';

// Api
import { api as planetsAPI } from '../domains/planets/dataSource';

const app = express();

app.use(session(sessionOptions));
app.use(cors(corsOptions));
app.use(readToken);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      planetsAPI,
    };
  },
  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
  playground: {
    settings: {
      "request.credentials": 'include',
    },
  },
});

server.applyMiddleware({ app, cors: false });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

export { server, httpServer };
