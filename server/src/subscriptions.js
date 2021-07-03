// Pubsub
import { pubSub } from './init/pubSub';

// Events
import { events } from './events';

export const subscriptions = {
  peopleUpdated: {
    subscribe: () => pubSub.asyncIterator([
      events.PERSON_ADDED,
      events.PERSON_REMOVED,  
    ]),
  }
}
