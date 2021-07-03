import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';

// Schema
import schema from '../schema.gql';

// Resolvers
import { resolvers } from '../resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

export { server, httpServer };
