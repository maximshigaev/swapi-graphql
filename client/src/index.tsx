import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo//react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import { App } from './components';

// Styles
import 'antd/dist/antd.css';

// Client
import { client } from './init/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
