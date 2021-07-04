export const queries = {
  planets: async (_, { pageNumber }, { dataSources }) => {
    const { results } = await dataSources.planetsAPI.getPlanets(pageNumber);

    return results;
  },
}
