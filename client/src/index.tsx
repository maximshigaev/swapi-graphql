import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo//react-hooks';

// Components
import { App } from './components';

// Styles
import 'antd/dist/antd.css';

// Client
import { client } from './init/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
