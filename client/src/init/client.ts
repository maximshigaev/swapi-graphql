import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from '@apollo/client';

// Constants
import { BASE_URL } from '../constants';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: BASE_URL,
});
