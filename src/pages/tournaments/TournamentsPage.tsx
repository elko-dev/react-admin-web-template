import * as React from 'react';
import './TournamentsPage.scss';
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
export default class TournamentsPage extends React.Component<Props, State> {
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
                <h1>Tournaments</h1>
                
            </div>
        );
    }
}

const classNames = {
    containerStyle: 'home-page',
}
