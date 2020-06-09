import * as React from 'react';
import './HomePage.scss';
import { inject, observer } from 'mobx-react';
import { StoreNames } from '../../stores/Store';
import { IUserStore } from '../../stores/UserStore';
import { Tournament } from 'models/Tournament';

interface State {
    tournaments: Tournament[];
}

interface Props {

}

@inject(StoreNames.UserStore)
@observer
export default class HomePage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            tournaments: [],
        }
    }

    get userStore() {
        return this.props[StoreNames.UserStore] as IUserStore;
    }

    public render() {
        return (
            <div className={classNames.containerStyle}>

            </div>
        );
    }
}

const classNames = {
    containerStyle: 'home-page',
}
