import * as React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Stores } from 'stores/Store';
import { Routes } from 'config/Routes';
import Login from 'pages/Login/Login';
import TournamentsPage from 'pages/tournaments/TournamentsPage';
import Signup from 'pages/Signup/Signup';
import PrivateRoute from 'sharedComponents/PrivateRoute';
import Home from 'pages/Home/Home';

export default class App extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Provider {...Stores}>
        <BrowserRouter>
          <Switch>
            <Route path={Routes.LOGIN_PAGE} exact component={Login} />
            <Route path={Routes.SIGNUP_PAGE} exact component={Signup} />
            <PrivateRoute
              path={Routes.TOURNAMENTS_PAGE}
              exact
              component={TournamentsPage}
            />
            <PrivateRoute path={Routes.HOME_PAGE} component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
