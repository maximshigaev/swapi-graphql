// Model
import { getPeople, addPerson, removePerson, updatePerson } from './model';

// Subscriptions
import { subscriptions as personSubscriptions } from './subscriptions';

// Pubsub
import { pubSub } from './init/pubSub';

// Events
import { events } from './events';

export const resolvers = {
  Query: {
    people: (_, { pageNumber }) => getPeople(pageNumber),
  },
  Mutation: {
    addPerson: (_, { person, pageNumber }) => {
      const people = addPerson(person);

      pubSub.publish(events.PERSON_ADDED, {
        peopleUpdated: people.slice((pageNumber - 1) * 10, pageNumber * 10),
      });

      return people;
    },
    removePerson: (_, { id, pageNumber }) => {
      const people = removePerson(id);

      pubSub.publish(events.PERSON_REMOVED, {
        peopleUpdated: people.slice((pageNumber - 1) * 10, pageNumber * 10),
      });

      return people;
    },
    updatePerson: (_, { id, person, pageNumber }) => {
      const people = updatePerson(id, person);

      pubSub.publish(events.PERSON_UPDATED, {
        peopleUpdated: people.slice((pageNumber - 1) * 10, pageNumber * 10),
      });

      return people;
    },
  },
  Subscription: {
    ...personSubscriptions,
  },
}
