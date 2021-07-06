import { ApolloError } from 'apollo-server-errors';

export const queries = {
  planets: async (_, { pageNumber }, { dataSources }) => {
    try {
      const { results } = await dataSources.planetsAPI.getPlanets(pageNumber);

      return results;
    } catch {
      throw new ApolloError('There are no planets for this page');
    }
  },
}
