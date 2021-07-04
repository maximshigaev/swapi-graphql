// Queries
import { queries as peopleQueries } from '../domains/people/queries';
import { queries as planetsQueries } from '../domains/planets/queries';

// Mutations
import { mutations as peopleMutations } from '../domains/people/mutations';

// Subscriptions
import { subscriptions as peopleSubscriptions } from '../domains/people/subscriptions';

export const resolvers = {
  Query: {
    ...peopleQueries,
    ...planetsQueries,
  },
  Mutation: {
    ...peopleMutations,
  },
  Subscription: {
    ...peopleSubscriptions,
  },
}
