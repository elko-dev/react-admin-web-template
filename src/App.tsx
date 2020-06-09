import { Provider } from "mobx-react";
import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Stores } from "./stores/Store";
import { Routes } from "./config/Routes";
import LoginPage from "./pages/Login/Login";
import HomePage from 'pages/home/HomePage';
import Header from 'sharedComponents/header/Header';

export default class App extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Provider {...Stores}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              path={Routes.LOGIN_PAGE}
              exact={true}
              component={LoginPage}
            />
            <Route
              path={Routes.HOME_PAGE}
              exact={true}
              component={HomePage}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
