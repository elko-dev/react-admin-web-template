import * as React from 'react';
import './Signup.scss';
import { User } from 'models/User';
import { inject, observer } from 'mobx-react';
import { StoreNames } from 'stores/Store';
import { Redirect } from 'react-router-dom';
import { Routes } from 'config/Routes';
import { UserStore } from 'stores/UserStore';

interface State {
  authenticated: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface Props {}

@inject(StoreNames.UserStore)
@observer
export default class Signup extends React.Component<Props, State> {
  public state = {
    authenticated: false,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  };

  private get userStore() {
    return this.props[StoreNames.UserStore] as UserStore;
  }

  private handleSignup = async () => {
    try {
      const user: User = await this.props[StoreNames.UserStore].signUp(
        this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName,
        this.state.phoneNumber
      );

      console.log('Created user ', user);

      this.setState({
        authenticated: true,
      });
    } catch (errors) {
      console.log(errors);

      alert(errors);
    }
  };

  public render() {
    return this.userStore.user ? (
      <Redirect to={Routes.HOME_PAGE} />
    ) : (
      <div>
        <h1 className="centered">Sign Up</h1>
        <div className="loginForm">
          <form className="form">
            <div className="formField">
              <input
                onChange={(e) => this.setState({ email: e.target.value })}
                className="input"
                type="text"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="formField">
              <input
                onChange={(e) => this.setState({ firstName: e.target.value })}
                className="input"
                type="text"
                placeholder="First name"
                autoComplete="given-name"
              />
            </div>
            <div className="formField">
              <input
                onChange={(e) => this.setState({ lastName: e.target.value })}
                className="input"
                type="text"
                placeholder="Last name"
                autoComplete="family-name"
              />
            </div>
            <div className="formField">
              <input
                onChange={(e) => this.setState({ phoneNumber: e.target.value })}
                className="input"
                type="text"
                placeholder="Phone number"
                autoComplete="tel"
              />
            </div>
            <div className="formField">
              <input
                onChange={(e) => this.setState({ password: e.target.value })}
                className="input"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <div className="formField">
              <button
                className="submitBtn"
                type="button"
                onClick={this.handleSignup}
              >
                Register
              </button>
            </div>
          </form>
          <div>
            Already have an account? Log in <a href="/login">here</a>.
          </div>
        </div>
      </div>
    );
  }
}
