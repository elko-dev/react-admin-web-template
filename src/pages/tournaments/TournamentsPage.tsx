import * as React from 'react';
import './TournamentsPage.scss';
import { inject, observer } from 'mobx-react';
import { StoreNames } from '../../stores/Store';
import { IUserStore } from '../../stores/UserStore';
import { Tournament } from 'models/Tournament';
import TournamentsTable from './TournamentsTable/TournamentsTable';
import AddTournamentForm from './TournamentForm/AddTournamentForm';
import Header from 'sharedComponents/header/Header';
import RoundedButton from 'sharedComponents/roundedButton/RoundedButton';
import { TournamentService } from 'service/TournamentService';

interface State {
    tournaments: Tournament[];
    displayForm: boolean;
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
            displayForm: false,
        }
    }
    private tournamentService: TournamentService = new TournamentService();

    get userStore() {
        return this.props[StoreNames.UserStore] as IUserStore;
    }

    componentDidMount = async () => {
        const tournaments: Tournament[] = await this.tournamentService.getTournaments();
        this.setState({ tournaments });
    }

    toggleForm = (): void => {
        this.setState({ displayForm: !this.state.displayForm });
    }

    public render() {
        const { displayForm, tournaments } = this.state;
        return (
            <div className={classNames.containerStyle}>
                <Header />
                <div className={classNames.pageStyle}>
                    <h1>Tournaments {displayForm && `/ Add`}</h1>

                    {displayForm ?
                        <AddTournamentForm toggleShowForm={this.toggleForm} />
                        :
                        <>
                            <RoundedButton className={classNames.addButton} handleClick={this.toggleForm}>
                                Add Tournament
                            </RoundedButton>
                            <TournamentsTable tournaments={tournaments} />
                        </>
                    }

                </div>
            </div>
        );
    }
}

const classNames = {
    containerStyle: 'tournaments-page-container',
    pageStyle: 'tournaments-page',
    addButton: 'add-tournament-button',
}
