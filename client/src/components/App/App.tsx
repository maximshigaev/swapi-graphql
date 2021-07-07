import { FC, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { MainPage, LoginPage, SignupPage } from '../';

// Interfaces
import { IUser } from '../../interfaces';

export const App: FC = () => {
  const [authorizedUser, setAuthorizedUser] = useState<IUser | null>(null);

  return (
    <Switch>
      <Route
        path={`${process.env.PUBLIC_URL}/`}
        exact
      >
        <MainPage
          onLogout={setAuthorizedUser}
          authorizedUser={authorizedUser}
        />
      </Route>
      <Route
        path={`${process.env.PUBLIC_URL}/login`}
        exact
      >
        <LoginPage
          authorizedUser={authorizedUser}
          onLogin={setAuthorizedUser}
        />
      </Route>
      <Route
        path={`${process.env.PUBLIC_URL}/signup`}
        exact
      >
        <SignupPage
          authorizedUser={authorizedUser}
          onSignup={setAuthorizedUser}
        />
      </Route>
      <Redirect to={`${process.env.PUBLIC_URL}/`} />
    </Switch>
  );
}
