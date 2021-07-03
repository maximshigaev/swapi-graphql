import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from '@apollo/client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createHttpLink } from 'apollo-link-http';

// Constants
import { BASE_URL } from '../constants';

const httpLink = createHttpLink({
  uri: BASE_URL,
})

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true,
  }
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return (definition.kind === 'OperationDefinition') && (definition.operation === 'subscription');
    },
    wsLink,
    httpLink,
  ) as any,
});
