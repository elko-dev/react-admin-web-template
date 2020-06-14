import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StoreNames } from 'stores/Store';

interface Props {}

@inject(StoreNames.UserStore)
@observer
class HomePage extends Component<Props> {
  public render() {
    return (
      <div>
        Welcome to Elko, {this.props[StoreNames.UserStore].user?.firstName}!
      </div>
    );
  }
}

export default HomePage;
