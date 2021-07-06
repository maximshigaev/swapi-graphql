import { FC, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { MainPage, LoginPage } from '../';

export const App: FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Switch>
      <Route
        path={`${process.env.PUBLIC_URL}/`}
        exact
      >
        <MainPage isAuthorized={isAuthorized} />
      </Route>
      <Route
        path={`${process.env.PUBLIC_URL}/login`}
        exact
      >
        <LoginPage
          isAuthorized={isAuthorized}
          onSuccess={setIsAuthorized}
        />
      </Route>
      <Redirect to={`${process.env.PUBLIC_URL}/`} />
    </Switch>
  );
}
