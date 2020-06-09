import * as React from 'react';
import './TournamentsPage.scss';
import { inject, observer } from 'mobx-react';
import { StoreNames } from '../../stores/Store';
import { IUserStore } from '../../stores/UserStore';
import { Tournament } from 'models/Tournament';
import TournamentsTable from './TournamentsTable/TournamentsTable';
import Header from 'sharedComponents/header/Header';

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

    componentDidMount = () => {
        this.setState({ tournaments: testTournaments });
    }

    public render() {
        return (
            <div className={classNames.containerStyle}>
                <Header />
                <div className={classNames.pageStyle}>
                    <h1>Tournaments</h1>

                    <TournamentsTable tournaments={this.state.tournaments} />
                </div>
            </div>
        );
    }
}

const classNames = {
    containerStyle: 'tournaments-page-container',
    pageStyle: 'tournaments-page',
}


const testTournaments: Tournament[] = [
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
    {
        id: 1,
        name: '12 week handicapped bowliards league',
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '',
        shortDescription: '',
        longDescription: '',
        facebookEventUrl: '',
        handicapDescription: '',
        buyInPrice: 20,
        buyBacksPerTournament: 2,
        buyBacksPerGame: 0,
        buyBackPrice: 10,
        percentToPayout: 0,
        isPaidOut: false,
        initialPot: 25,
    },
]