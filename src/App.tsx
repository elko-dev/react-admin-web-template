import { Provider } from "mobx-react";
import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Stores } from "./stores/Store";
import { Routes } from "./config/Routes";
import LoginPage from "./pages/Login/Login";

export default class App extends React.Component<RouteComponentProps | {}> {
  public render(): JSX.Element {
    return (
      <Provider {...Stores}>
        <BrowserRouter>
          <Switch>
            <Route
              path={Routes.LOGIN_PAGE}
              exact={true}
              component={LoginPage}
            />

          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
