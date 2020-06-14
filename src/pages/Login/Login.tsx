import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RoundedButton from '../../sharedComponents/roundedButton/RoundedButton';
import { inject, observer } from 'mobx-react';
import { StoreNames } from '../../stores/Store';
import { UserStore } from '../../stores/UserStore';
import TextInput from 'sharedComponents/textInput/TextInput';
import { Routes } from 'config/Routes';
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
  public state: State = {
    loginError: null,
  };

  private get userStore() {
    return this.props[StoreNames.UserStore] as UserStore;
  }

  private handleLogin = async () => {
    try {
      const user = await this.userStore.login(
        this.state.email!,
        this.state.password!
      );

      console.log('Logged in', user);
    } catch (error) {
      console.log(error);

      this.setState({
        loginError: error.message,
      });
    }
  };

  private signInWithGoogle = async () => {
    try {
      await this.userStore.googleLogin();
    } catch (error) {
      console.log(error);
      this.setState({
        loginError: error.message,
      });
    }
  };

  public render() {
    return this.userStore.user ? (
      <Redirect to={Routes.HOME_PAGE} />
    ) : (
      <div className={classNames.containerStyle}>
        <div className={classNames.formContainer}>
          <div className={classNames.loginForm}>
            <form style={{ width: '100%' }}>
              <div className={classNames.formField}>
                <TextInput
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className={classNames.formField}>
                <TextInput
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className={classNames.formField}>
                <button
                  className={classNames.submitBtn}
                  type="button"
                  onClick={this.handleLogin}
                >
                  Log In with Email
                </button>
              </div>
            </form>
          </div>

          {this.state.loginError && (
            <div className={classNames.errorBlock}>{this.state.loginError}</div>
          )}
          <h5>
            Don't have an account?&nbsp;
            <Link to={Routes.SIGNUP_PAGE}>Sign Up</Link>
          </h5>

          <RoundedButton
            handleClick={this.signInWithGoogle}
            className={classNames.googleLoginButton}
          >
            Use Google Account
          </RoundedButton>
        </div>
      </div>
    );
  }
}

const classNames = {
  containerStyle: 'containerStyle',
  formContainer: 'formContainer',
  loginForm: 'loginForm',
  formField: 'formField',
  submitBtn: 'submitBtn',
  errorBlock: 'errorBlock',
  LogoSubTextContainerStyle: 'LogoSubTextContainerStyleLogin',
  LogoSubTextStyle: 'LogoSubTextStyleLogin',
  manageEverything: 'manage_everything_login',
  googleLoginButton: 'googleLoginButton',
  orBar: 'login_or_bar',
};
