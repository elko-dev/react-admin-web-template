import { Provider } from "mobx-react";
import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Stores } from "./stores/Store";
import { Routes } from "./config/Routes";
import Login from "./pages/Login/Login";
import TournamentsPage from 'pages/tournaments/TournamentsPage';
import Signup from 'pages/Signup/Signup';

export default class App extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Provider {...Stores}>
        <BrowserRouter>
          <Switch>
            <Route
              path={Routes.LOGIN_PAGE}
              exact={true}
              component={Login}
            />
            <Route path="/signup" exact={true} component={Signup} />
            <Route
              path={Routes.TOURNAMENTS_PAGE}
              exact={true}
              component={TournamentsPage}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
