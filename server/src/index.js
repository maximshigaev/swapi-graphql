// Server
import { server, httpServer } from './init/server';

// Config
import { PORT } from './init/config'; 

httpServer.listen(PORT, () => {
  console.log(`Server ready at ${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ${PORT}${server.subscriptionsPath}`);
});
