// Queries
import { queries as peopleQueries } from '../domains/people/queries';
import { queries as planetsQueries } from '../domains/planets/queries';
import { queries as usersQueries } from '../domains/users/queries';

// Mutations
import { mutations as peopleMutations } from '../domains/people/mutations';
import { mutations as usersMutations } from '../domains/users/mutations';

// Subscriptions
import { subscriptions as peopleSubscriptions } from '../domains/people/subscriptions';

export const resolvers = {
  Query: {
    ...peopleQueries,
    ...planetsQueries,
    ...usersQueries,
  },
  Mutation: {
    ...peopleMutations,
    ...usersMutations,
  },
  Subscription: {
    ...peopleSubscriptions,
  },
}
