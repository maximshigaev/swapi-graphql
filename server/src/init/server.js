import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';

// Schema
import schema from './types.gql';

// Resolvers
import { resolvers } from './resolvers';

// Api
import { api as planetsAPI } from '../domains/planets/dataSource';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      planetsAPI,
    };
  },
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

export { server, httpServer };
