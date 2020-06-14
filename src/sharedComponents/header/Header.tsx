import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import { StoreNames } from 'stores/Store';
import { IUserStore } from 'stores/UserStore';
import { ELKO_LOGO_SVG } from 'images/images';
import { Routes } from 'config/Routes';
import './Header.scss';

interface State {}

interface Props extends RouteComponentProps {}

@inject(StoreNames.UserStore)
@observer
class Header extends React.Component<Props, State> {
  get userStore() {
    return this.props[StoreNames.UserStore] as IUserStore;
  }

  navigateToRoute = (route: string) => {
    this.props.history.push(route);
  };

  public render() {
    const { _user } = this.userStore;
    return (
      <div className={classNames.containerStyle}>
        <div
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={() => {
            this.navigateToRoute(Routes.TOURNAMENTS_PAGE);
          }}
        >
          <img
            src={ELKO_LOGO_SVG}
            style={{ height: '100%', maxHeight: '38px' }}
            alt={'Elko Logo'}
          />
          <div className={classNames.logoContainer}>
            <p>App</p>
            <p>Builder</p>
          </div>
        </div>
        {_user ? (
          <div>
            <h1
              style={{
                margin: '0px',
                fontFamily: 'NeueHausGrotesk',
                color: '#162E8B',
                fontSize: '16px',
              }}
            >
              {_user.firstName || _user.email}
            </h1>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const classNames = {
  containerStyle: 'header-container',
  logoContainer: 'header-logo-sub-text-container',
};

export default withRouter(Header);
