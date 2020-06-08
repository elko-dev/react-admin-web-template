import * as React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import RoundedButton from '../../sharedComponents/roundedButton/RoundedButton';
import { inject, observer } from 'mobx-react';
import { StoreNames } from '../../stores/Store';
import { IUserStore } from '../../stores/UserStore';

interface State {
    loginError: string | null;
    authenticated: boolean;
    email?: string;
    password?: string;
}

interface Props {

}

@inject(StoreNames.UserStore)
@observer
export default class LoginPage extends React.Component<Props, State> {
    public state: State = {
        loginError: null,
        authenticated: false
    };

    get userStore() {
        return this.props[StoreNames.UserStore] as IUserStore;
    }

    private handleLogin = async () => {
        try {
            await this.userStore.login(this.state.email!, this.state.password!);
            this.setState({
                authenticated: true
            });
        }
        catch (error) {
            console.log(error)
            this.setState({
                loginError: error.message
            });
        }
    }

    private signInWithGoogle = async () => {
        try {
            await this.userStore.googleLogin();
            this.setState({
                authenticated: true
            });
        }
        catch (error) {
            console.log(error)
            this.setState({
                loginError: error.message
            });
        }
    }

    public render() {
        return (
            <div className={classNames.containerStyle}>
                <h1>Log in</h1>

                <RoundedButton handleClick={this.signInWithGoogle} className={classNames.googleLoginButton}>
                    Use Google Account
                </RoundedButton>

                <div className={classNames.orBar}><span>or</span></div>

                <div className={classNames.loginForm}>
                    <form style={{ width: '100%' }}>
                        <div className={classNames.formField}>
                            <input onChange={e => this.setState({ email: e.target.value })} className={classNames.inputStyle} type="text" placeholder="Email Address" />
                        </div>
                        <div className={classNames.formField}>
                            <input onChange={e => this.setState({ password: e.target.value })} className={classNames.inputStyle} type="password" placeholder="Password" />
                        </div>
                        <div className={classNames.formField}>
                            <button className={classNames.submitBtn} type="button" onClick={e => this.handleLogin()}>Log In with Email</button>
                        </div>
                    </form>
                </div>

                {this.state.loginError && (<div className={classNames.errorBlock}>{this.state.loginError}</div>)}
                <h5>
                    Don't have an account?&nbsp;
                        <Link to="/signup">Sign Up</Link>
                </h5>
            </div>
        );
    }
}

const classNames = {
    containerStyle: 'containerStyle',
    rightContainerStyle: 'rightContainerStyle',
    leftContainerStyle: 'leftContainerStyle',
    loginForm: 'loginForm',
    inputStyle: 'inputStyle',
    formField: 'formField',
    submitBtn: 'submitBtn',
    errorBlock: 'errorBlock',
    LogoSubTextContainerStyle: 'LogoSubTextContainerStyleLogin',
    LogoSubTextStyle: 'LogoSubTextStyleLogin',
    manageEverything: 'manage_everything_login',
    googleLoginButton: 'googleLoginButton',
    orBar: 'login_or_bar',
}
