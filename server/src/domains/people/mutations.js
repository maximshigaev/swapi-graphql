// Model
import { addPerson, removePerson, updatePerson } from './model';

// Pubsub
import { pubSub } from '../../init/pubSub';

// Events
import { events } from '../../events';

export const mutations = {
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
}
