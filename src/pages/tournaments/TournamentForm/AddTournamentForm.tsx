import * as React from 'react';
import './AddTournamentForm.scss';
import { NewTournament } from 'models/Tournament';

interface Props {
}

interface State {
    newTournament: NewTournament;
}

export default class AddTournamentForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            newTournament: {
                name: '',
                startDate: new Date(),
                endDate: new Date(),
                imageUrl: '',
                shortDescription: '',
                longDescription: '',
                facebookEventUrl: '',
                handicapDescription: '',
                buyInPrice: 0,
                buyBacksPerTournament: 0,
                buyBacksPerGame: 0,
                buyBackPrice: 0,
                percentToPayout: 0,
                initialPot: 0,
            }
        }
    }

    public render(): JSX.Element {
        return (
            <div className={cssClasses.addTournamentForm__wrapper}>

            </div>
        );
    }
}

const cssClasses = {
    addTournamentForm__wrapper: 'addTournamentForm__wrapper',
};