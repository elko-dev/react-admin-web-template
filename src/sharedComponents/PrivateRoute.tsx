import React, { Component } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import { StoreNames } from 'stores/Store';
import { Routes } from 'config/Routes';

@inject(StoreNames.UserStore)
@observer
class PrivateRoute extends Component<RouteProps> {
  private getRenderable(renderArgs: RouteComponentProps) {
    const { component, render, children } = this.props;

    if (children) return children;
    if (render) return render(renderArgs);
    if (component) {
      const Component = component;
      return <Component {...renderArgs} />;
    }

    return null;
  }

  public render() {
    const { component, render, children, ...rest } = this.props;
    const { user } = this.props[StoreNames.UserStore];

    return (
      <Route
        {...rest}
        render={(renderArgs) =>
          user ? (
            this.getRenderable(renderArgs)
          ) : (
            <Redirect
              to={{
                pathname: Routes.LOGIN_PAGE,
                state: { from: renderArgs.location },
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
