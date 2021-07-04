// Queries
import { queries as peopleQueries } from '../domains/people/queries';

// Mutations
import { mutations as peopleMutations } from '../domains/people/mutations';

// Subscriptions
import { subscriptions as peopleSubscriptions } from '../domains/people/subscriptions';

export const resolvers = {
  Query: {
    ...peopleQueries,
  },
  Mutation: {
    ...peopleMutations,
  },
  Subscription: {
    ...peopleSubscriptions,
  },
}
