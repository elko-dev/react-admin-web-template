import * as React from 'react';
import './Signup.scss';

interface State {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
interface Props {
  style: React.CSSProperties;
  // userStore: UserStore;
  handleSignup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) => void;
}

export default class Signup extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  };

  private dummyHandleSignup() {
    //
  }

  public render() {
    return (
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
                onClick={() => {
                  this.dummyHandleSignup();
                  // this.props.handleSignup(
                  //   this.state.email,
                  //   this.state.password,
                  //   this.state.firstName,
                  //   this.state.lastName,
                  //   this.state.phoneNumber
                  // );
                }}
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
