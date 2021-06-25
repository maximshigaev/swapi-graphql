// Server
import { server, app } from './init/server';

// Config
import { PORT } from './init/config'; 

app.listen({ port: PORT }, () => {
  console.log(`Server ready at ${PORT}${server.graphqlPath}`);
});
