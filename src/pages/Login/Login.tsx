import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { StoreNames } from 'stores/Store';
import { UserStore } from 'stores/UserStore';
import { Routes } from 'config/Routes';
import LoginForm from './LoginForm';
import './Login.scss';

interface State {
  loginError: string | null;
  email?: string;
  password?: string;
}

interface Props {}

@inject(StoreNames.UserStore)
@observer
export default class LoginPage extends React.Component<Props, State> {
  private get userStore() {
    return this.props[StoreNames.UserStore] as UserStore;
  }

  public render() {
    return this.userStore.user ? (
      <Redirect to={Routes.HOME_PAGE} />
    ) : (
      <LoginForm userStore={this.userStore} />
    );
  }
}
