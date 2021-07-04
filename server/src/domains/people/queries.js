// Model
import { getPeople } from './model';

export const queries = {
  people: (_, { pageNumber }) => getPeople(pageNumber),
}
