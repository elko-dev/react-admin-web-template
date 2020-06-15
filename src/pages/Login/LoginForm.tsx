import React, { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { UserStore } from 'stores/UserStore';
import TextInput from 'sharedComponents/textInput/TextInput';
import RoundedButton from 'sharedComponents/roundedButton/RoundedButton';
import { Routes } from 'config/Routes';

interface LocationState {
  from?: Location;
}

interface Props {
  userStore: UserStore;
}

export default function LoginForm({ userStore }: Props) {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const user = await userStore.login(email!, password!);
      const from = location.state.from || { pathname: '/' };

      history.replace(from);

      console.log('Logged in', user);
    } catch (error) {
      console.log(error);

      setLoginError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await userStore.googleLogin();
    } catch (error) {
      console.log(error);
      setLoginError(error.message);
    }
  };

  return (
    <div className={classNames.containerStyle}>
      <div className={classNames.formContainer}>
        <div className={classNames.loginForm}>
          <form style={{ width: '100%' }}>
            <div className={classNames.formField}>
              <TextInput
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className={classNames.formField}>
              <TextInput
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={classNames.formField}>
              <button
                className={classNames.submitBtn}
                type="button"
                onClick={handleLogin}
              >
                Log In with Email
              </button>
            </div>
          </form>
        </div>

        {loginError && (
          <div className={classNames.errorBlock}>{loginError}</div>
        )}
        <h5>
          Don't have an account?&nbsp;
          <Link to={Routes.SIGNUP_PAGE}>Sign Up</Link>
        </h5>

        <RoundedButton
          handleClick={signInWithGoogle}
          className={classNames.googleLoginButton}
        >
          Use Google Account
        </RoundedButton>
      </div>
    </div>
  );
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
