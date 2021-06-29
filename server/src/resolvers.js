// Model
import { getPeople, addPerson, removePerson, updatePerson } from './model';

export const resolvers = {
  Query: {
    people: (_, { pageNumber }) => getPeople(pageNumber),
  },
  Mutation: {
    addPerson: (_, { person }) => addPerson(person),
    removePerson: (_, { id }) => removePerson(id),
    updatePerson: (_, { id, person }) => updatePerson(id, person),
  },
}
